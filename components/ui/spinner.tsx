import { LogoLoader } from '@/components/logo-loader'

function Spinner({ className }: { className?: string }) {
  return <LogoLoader size="xs" className={className} />
}

export { Spinner }
