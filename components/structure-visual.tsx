"use client"

import { useCallback, useState } from "react"

/**
 * Chemical structure panel.
 * Shows the structure image from /public when it exists; otherwise renders a
 * peptide sequence diagram parsed from the name/IUPAC text, plus the molecular formula.
 */

interface StructureVisualProps {
  name: string
  formula?: string
  weight?: string
  /** Sequence-style text to parse, e.g. "H-His-Aib-Glu-...-Gly" (first parseable one wins) */
  sequenceSources?: (string | undefined)[]
  image?: string
}

interface Residue {
  code: string
  isD: boolean
  mod?: string
}

interface Peptide {
  residues: Residue[]
  nTerm?: string
  cTerm?: string
  bridge?: [number, number] // 0-based residue indices
}

const AMINO_ACIDS = new Set([
  "Ala", "Arg", "Asn", "Asp", "Cys", "Gln", "Glu", "Gly", "His", "Ile", "Leu", "Lys", "Met",
  "Phe", "Pro", "Ser", "Thr", "Trp", "Tyr", "Val", "Aib", "Orn", "Sar", "Pyr", "Nle", "Abu",
])
const N_TERMINI = new Set(["H", "Ac"])
const C_TERMINI = new Set(["OH", "NH2", "Ol", "ol"])

/** Parse three-letter peptide notation; returns null if the text isn't a clean sequence. */
export function parsePeptide(text?: string): Peptide | null {
  if (!text) return null
  const bridgeMatch = text.match(/Cys\s*(\d+)\s*-\s*Cys\s*(\d+)/i)
  const body = text.replace(/\(\s*Disulfide Bridge[^)]*\)/i, "").trim()

  // Split on hyphens that are not inside parentheses
  const tokens: string[] = []
  let depth = 0
  let current = ""
  for (const ch of body) {
    if (ch === "(") depth++
    if (ch === ")") depth--
    if (ch === "-" && depth === 0) {
      tokens.push(current.trim())
      current = ""
    } else {
      current += ch
    }
  }
  tokens.push(current.trim())
  if (tokens.some((t) => t === "")) return null

  const peptide: Peptide = { residues: [] }
  if (N_TERMINI.has(tokens[0])) peptide.nTerm = tokens.shift()
  if (C_TERMINI.has(tokens[tokens.length - 1])) peptide.cTerm = tokens.pop()

  let stereo: string | undefined
  for (const token of tokens) {
    if (token === "D" || token === "L") {
      stereo = token
      continue
    }
    const m = token.match(/^([A-Z][a-z]{2})((?:\([^()]*(?:\([^()]*\)[^()]*)*\))*)$/)
    if (!m || !AMINO_ACIDS.has(m[1])) return null
    const mod = m[2] ? m[2].slice(1, -1).replace(/\)\(/g, ", ") : undefined
    peptide.residues.push({ code: m[1], isD: stereo === "D", mod })
    stereo = undefined
  }
  if (stereo || peptide.residues.length < 2) return null

  if (bridgeMatch) {
    const a = parseInt(bridgeMatch[1], 10) - 1
    const b = parseInt(bridgeMatch[2], 10) - 1
    if (peptide.residues[a]?.code === "Cys" && peptide.residues[b]?.code === "Cys") {
      peptide.bridge = [a, b]
    }
  }
  return peptide
}

/** "C187H291N45O59" -> C<sub>187</sub>H<sub>291</sub>... */
function Formula({ value }: { value: string }) {
  if (!/^[A-Za-z0-9]+$/.test(value)) return <span>{value}</span>
  return (
    <span>
      {value.split(/(\d+)/).map((part, i) =>
        /^\d+$/.test(part) ? <sub key={i} className="text-[0.65em]">{part}</sub> : <span key={i}>{part}</span>,
      )}
    </span>
  )
}

const PER_ROW = 8
const GAP = 60
const R = 21
const PAD = 40
const ROW_GAP = 84

function beadPosition(i: number) {
  const row = Math.floor(i / PER_ROW)
  const col = i % PER_ROW
  const x = PAD + (row % 2 === 0 ? col : PER_ROW - 1 - col) * GAP // serpentine
  const y = PAD + 14 + row * ROW_GAP
  return { x, y }
}

function isRowTurn(i: number, count: number) {
  const col = i % PER_ROW
  const endsRow = col === PER_ROW - 1 && i + 1 < count
  const startsRow = col === 0 && i > 0
  return endsRow || startsRow
}

function SequenceDiagram({ peptide }: { peptide: Peptide }) {
  const { residues, bridge } = peptide
  const rows = Math.ceil(residues.length / PER_ROW)
  const cols = Math.min(residues.length, PER_ROW)
  const width = PAD * 2 + (cols - 1) * GAP
  const height = PAD * 2 + 14 + (rows - 1) * ROW_GAP + 10
  const positions = residues.map((_, i) => beadPosition(i))

  let bridgePath: string | undefined
  if (bridge) {
    const a = positions[bridge[0]]
    const b = positions[bridge[1]]
    const lift = a.y === b.y ? 44 : 0
    const cx = (a.x + b.x) / 2 + (a.y === b.y ? 0 : 60)
    const cy = Math.min(a.y, b.y) - lift
    bridgePath = `M ${a.x} ${a.y - R} Q ${cx} ${cy - R} ${b.x} ${b.y - R}`
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      role="img"
      aria-label={`Peptide sequence: ${residues.map((r) => (r.isD ? "D-" : "") + r.code).join("-")}`}
    >
      {/* backbone */}
      {positions.slice(1).map((p, i) => (
        <line key={`l${i}`} x1={positions[i].x} y1={positions[i].y} x2={p.x} y2={p.y} stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
      ))}

      {bridgePath && (
        <g>
          <path d={bridgePath} fill="none" stroke="#facc15" strokeWidth={2} strokeDasharray="5 4" />
          <text
            x={(positions[bridge![0]].x + positions[bridge![1]].x) / 2}
            y={Math.min(positions[bridge![0]].y, positions[bridge![1]].y) - R - 32}
            textAnchor="middle"
            fontSize={11}
            fill="#facc15"
          >
            S–S
          </text>
        </g>
      )}

      {residues.map((r, i) => {
        const { x, y } = positions[i]
        const fill = r.mod ? "rgba(217,70,239,0.25)" : r.isD ? "rgba(251,146,60,0.25)" : "rgba(34,211,238,0.15)"
        const stroke = r.mod ? "#e879f9" : r.isD ? "#fb923c" : "#22d3ee"
        return (
          <g key={i}>
            <title>{`${i + 1}. ${r.isD ? "D-" : ""}${r.code}${r.mod ? ` (${r.mod})` : ""}`}</title>
            <circle cx={x} cy={y} r={R} fill={fill} stroke={stroke} strokeWidth={1.5} />
            <text x={x} y={y + 4} textAnchor="middle" fontSize={12} fontWeight={600} fill="#fff">
              {r.isD ? `D-${r.code}` : r.code}
            </text>
            {/* at row turns the backbone runs vertically, so put the number beside the bead */}
            <text
              {...(isRowTurn(i, residues.length)
                ? { x: x + (x > width / 2 ? R + 6 : -(R + 6)), y: y + 3, textAnchor: x > width / 2 ? "start" : "end" }
                : { x, y: y + R + 14, textAnchor: "middle" })}
              fontSize={9}
              fill="rgba(255,255,255,0.4)"
            >
              {i + 1}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function StructureVisual({ name, formula, weight, sequenceSources = [], image }: StructureVisualProps) {
  const [imageFailed, setImageFailed] = useState(false)
  // A 404 can happen before hydration, when onError isn't attached yet, so also check on mount
  const imageRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth === 0) setImageFailed(true)
  }, [])

  if (image && !imageFailed) {
    return (
      <div className="aspect-square bg-white rounded-lg border border-white/10 overflow-hidden">
        <img
          ref={imageRef}
          src={encodeURI(image)}
          alt={`${name} chemical structure`}
          className="w-full h-full object-contain"
          onError={() => setImageFailed(true)}
        />
      </div>
    )
  }

  const peptide = sequenceSources.map(parsePeptide).find(Boolean) ?? null
  const hasFormula = !!formula && formula !== "Not available"
  const modified = peptide?.residues
    .map((r, i) => ({ ...r, pos: i + 1 }))
    .filter((r) => r.mod)

  return (
    <div className="bg-black/60 border border-white/10 rounded-lg p-4 sm:p-6 min-h-[16rem] flex flex-col justify-center gap-6">
      {peptide && (
        <div>
          <div className="flex items-center justify-between text-xs text-white/50 mb-2 font-mono">
            <span>{peptide.nTerm ? `${peptide.nTerm}–` : "N-term"}</span>
            <span>{peptide.residues.length} residues</span>
            <span>{peptide.cTerm ? `–${peptide.cTerm}` : "C-term"}</span>
          </div>
          <SequenceDiagram peptide={peptide} />
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border border-cyan-400 bg-cyan-400/15" />L-amino acid</span>
            {peptide.residues.some((r) => r.isD) && (
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border border-orange-400 bg-orange-400/25" />D-amino acid</span>
            )}
            {!!modified?.length && (
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border border-fuchsia-400 bg-fuchsia-400/25" />Modified</span>
            )}
            {peptide.bridge && (
              <span className="flex items-center gap-1.5"><span className="w-4 border-t-2 border-dashed border-yellow-400" />Disulfide bridge</span>
            )}
          </div>
          {!!modified?.length && (
            <ul className="mt-3 space-y-1 text-xs text-white/70">
              {modified.map((r) => (
                <li key={r.pos}>
                  <span className="text-fuchsia-300 font-semibold">{r.code}{r.pos}</span>: {r.mod}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {hasFormula && (
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Molecular Formula</p>
          <p className={`${peptide ? "text-2xl" : "text-3xl sm:text-4xl"} font-semibold text-cyan-300 break-all`}>
            <Formula value={formula!} />
          </p>
          {weight && weight !== "Not available" && (
            <p className="text-sm text-white/50 mt-1">MW {weight} g/mol</p>
          )}
        </div>
      )}

      {!peptide && !hasFormula && (
        <p className="text-center text-white/40 text-sm">Structure available on request</p>
      )}
    </div>
  )
}
