/**
 * Octreotide product data including main product and all impurities
 */

export interface ProductInfo {
  title: string
  table: {
    "CAS NO"?: string
    "Molecular Formula": string
    "Molecular Weight": string
    Status: string
    "CP CAT No"?: string
    "HSN Code"?: string
    "Country of Origin"?: string
    "Shipping Temperature"?: string
  }
  description?: string
  iupacName?: string
  synonym?: string
  smiles?: string
}

export interface Impurity {
  id: string // e.g., "impurity-a", "impurity-b"
  name: string // e.g., "Octreotide EP Impurity A"
  productInfo: ProductInfo
  iupacName?: string
  synonym?: string
  smiles?: string
  structureImage?: string // Path to structure image in public folder
}

export interface OctreotideData {
  mainProduct: {
    id: string
    name: string
    productInfo: ProductInfo
    description: string
  }
  impurities: Impurity[]
  relatedProducts: {
    id: string
    name: string
    productInfo: ProductInfo
  }[]
}

export const octreotideData: OctreotideData = {
  mainProduct: {
    id: "octreotide",
    name: "Octreotide",
    productInfo: {
      title: "Octreotide",
      table: {
        "CAS NO": "83150-76-9",
        "Molecular Formula": "C49H66N10O10S2",
        "Molecular Weight": "1019.24",
        Status: "In Stock",
        "CP CAT No": "NA",
        "HSN Code": "38229010",
        "Country of Origin": "India",
        "Shipping Temperature": "Ambient",
      },
      description: "Octreotide is a synthetic octapeptide that mimics natural somatostatin. It is used to treat acromegaly, carcinoid tumors, and other conditions.",
    },
    description: "Octreotide is a synthetic octapeptide that mimics natural somatostatin. It is used to treat acromegaly, carcinoid tumors, and other conditions.",
  },
  impurities: [
    {
      id: "impurity-1",
      name: "Thr-O-Glycolyl",
      productInfo: {
        title: "Thr-O-Glycolyl",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C51H68N10O12S2",
          "Molecular Weight": "1077.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-Phe-Cys-Phe-D-Trp-Lys-Thr-Cys-Thr(Glycolated)(Primary-OH)-Ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/Thr-O-Glycolyl.png",
    },
    {
      id: "impurity-2",
      name: "Thr-O-2-Glycolyl",
      productInfo: {
        title: "Thr-O-2-Glycolyl",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C51H68N10O12S2",
          "Molecular Weight": "1077.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-P D-Phe-Cys-Phe-D-Trp-Lys-Thr-Cys -Thr(Glycolated)(Secondary-OH)-ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/Thr-O-2-Glycolyl.png",
    },
    {
      id: "impurity-3",
      name: "Thr-O-1-Diglycolyl Octreotide",
      productInfo: {
        title: "Thr-O-1-Diglycolyl Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C53H70N10O14S2",
          "Molecular Weight": "1135.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-phenylalanyl-L-cystyl-L-phenylalanyl-D-tryptophyl-L-lysyl-L-threonyl-L-cystyl-(di Glycolyl) threoninol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/Thr-O-1-Diglycolyl-Octreotide.png",
    },
    {
      id: "impurity-4",
      name: "Thr-O-2-Diglycolyl Octreotide",
      productInfo: {
        title: "Thr-O-2-Diglycolyl Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C53H70N10O14S2",
          "Molecular Weight": "1135.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-P D-Phe-Cys-Phe-D-Trp-Lys-Thr-Cys-Thr(Diglycolyl)(Secondary-OH)-ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/Thr-O-2-Diglycolyl-Octreotide.png",
    },
    {
      id: "impurity-5",
      name: "Lys -Glycolyl Octreotide",
      productInfo: {
        title: "Lys -Glycolyl Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C51H68N10O12S2",
          "Molecular Weight": "1077.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-Phe-Cys-Phe-D-Trp-Lys(Glycolated)-Thr-Cys-Thr-Ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/Lys-Glycolyl-Octreotide.png",
    },
    {
      id: "impurity-6",
      name: "Lys-Diglycolide Octreotide",
      productInfo: {
        title: "Lys-Diglycolide Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C53H70N10O14S2",
          "Molecular Weight": "1135.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-Phe-Cys-Phe-D-Trp-Lys(DiGlycolyl)-Thr-Cys-Thr-Ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/Lys-Diglycolide-Octreotide.png",
    },
    {
      id: "impurity-7",
      name: "D-Phe-1-Glycolyl Octreotide",
      productInfo: {
        title: "D-Phe-1-Glycolyl Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C51H68N10O12S2",
          "Molecular Weight": "1077.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-Phe(Glycolated)-Cys-Phe-D-Trp-Lys-Thr-Cys-Thr-Ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/D-Phe-1-Glycolyl-Octreotide.png",
    },
    {
      id: "impurity-8",
      name: "D-Phe Diglycolyl Octreotide",
      productInfo: {
        title: "D-Phe Diglycolyl Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C53H70N10O14S2",
          "Molecular Weight": "1135.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-Phe(DiGlycolyl)-Cys-Phe-D-Trp-Lys-Thr-Cys-Thr-Ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/D-Phe-Diglycolyl-Octreotide.png",
    },
    {
      id: "impurity-9",
      name: "D-Phe-(Lactide) Octreotide",
      productInfo: {
        title: "D-Phe-(Lactide) Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C55H74N10O14S2",
          "Molecular Weight": "1163.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-Phe(Lactide)-Cys-Phe-D-Trp-Lys-Thr-Cys-Thr-Ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/D-Phe-Lactide-Octreotide.png",
    },
    {
      id: "impurity-10",
      name: "Lys-(Lactoyl) Octreotide",
      productInfo: {
        title: "Lys-(Lactoyl) Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H70N10O12S2",
          "Molecular Weight": "1091.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-Phe-Cys-Phe-D-Trp-Lys(Lactoyl)-Thr-Cys-Thr-Ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/Lys-Lactoyl-Octreotide.png",
    },
    {
      id: "impurity-11",
      name: "Lys-(Lactide) Octreotide",
      productInfo: {
        title: "Lys-(Lactide) Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C55H74N10O14S2",
          "Molecular Weight": "1163.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-Phe-Cys-Phe-D-Trp-Lys(Lactide)-Thr-Cys-Thr-Ol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/Lys-Lactide-Octreotide.png",
    },
    {
      id: "impurity-12",
      name: "L-Di-Lactolyl-Thr-Octreotide",
      productInfo: {
        title: "L-Di-Lactolyl-Thr-Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C55H74N10O14S2",
          "Molecular Weight": "1163.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-phenylalanyl-L-cystyl-L-phenylalanyl-D-tryptophyl-L-lysyl (L-Di-Lactolyl) -L-threonyl-L-cystyl- threoninol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/L-Di-Lactolyl-Thr-Octreotide.png",
    },
    {
      id: "impurity-13",
      name: "D-Di-Lactolyl-Thr-Octreotide",
      productInfo: {
        title: "D-Di-Lactolyl-Thr-Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C55H74N10O14S2",
          "Molecular Weight": "1163.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-phenylalanyl-L-cystyl-L-phenylalanyl-D-tryptophyl-L-lysyl (D-Di-Lactolyl) -L-threonyl-L-cystyl- threoninol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/D-Di-Lactolyl-Thr-Octreotide.png",
    },
    {
      id: "impurity-14",
      name: "(Des-Thr-o18)-Octreotide",
      productInfo: {
        title: "(Des-Thr-o18)-Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C45H57N9O9S2",
          "Molecular Weight": "932.1",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(4R,7S,10S,13R,16S,19R)-13-((1H-indol-3-yl)methyl)-19-((R)-2-amino-3-phenylpropanamido)-10-(4-aminobutyl)-16-benzyl-7-((R)-1-hydroxyethyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosane-4-carboxylic acid",
      structureImage: "/Des-Thr-o18-Octreotide.png",
    },
    {
      id: "impurity-15",
      name: "Cyclic Methylene Octreotide",
      productInfo: {
        title: "Cyclic Methylene Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C50H66N10O10S2",
          "Molecular Weight": "1031.25",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(4S,7S,10S,13R,16S,19R)-13-((1H-indol-3-yl)methyl)-10-(4-aminobutyl)-16-benzyl-19-((R)-4-benzyl-5-oxoimidazolidin-1-yl)-N-((3R)-1,3-dihydroxybutan-2-yl)-7-(1-hydroxyethyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosane-4-carboxamide",
      structureImage: "/Cyclic-Methylene-Octreotide.png",
    },
    {
      id: "impurity-16",
      name: "L-Threoninol(Ac)-8-Octreotide",
      productInfo: {
        title: "L-Threoninol(Ac)-8-Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C51H68N10O11S2",
          "Molecular Weight": "1061.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(D-Phenylalanyl-L-cysteinyl-L-phenylalanyl-D-tryptophyl-L-lysyl-L-threonyl-N-[(2R,3R)-1-acetoxy-3-hydroxybutan-2-yl]-Lcysteinamide cyclic (2→7)-disulfide)",
      structureImage: "/L-Threoninol-Ac-8-Octreotide.png",
    },
    {
      id: "impurity-17",
      name: "D-Phe(3)-Octreotide",
      productInfo: {
        title: "D-Phe(3)-Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C49H66N10O10S2",
          "Molecular Weight": "1019.25",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-phenylalanyl-L-cystyl-D-phenylalanyl-D-tryptophyl-L-lysyl-L-threonyl-L-cystyl-L-threoninol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/D-Phe-3-Octreotide.png",
    },
    {
      id: "impurity-18",
      name: "L-Phe(1)-Octreotide",
      productInfo: {
        title: "L-Phe(1)-Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C49H66N10O10S2",
          "Molecular Weight": "1019.25",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "L-phenylalanyl-L-cystyl-L-phenylalanyl-D-tryptophyl-L-lysyl-L-threonyl-L-cystyl-L-threoninol (Disulfide Bridge between Cys2-Cys7)",
      structureImage: "/L-Phe-1-Octreotide.png",
    },
    {
      id: "impurity-19",
      name: "Acetyl-Lys5-octreotide",
      productInfo: {
        title: "Acetyl-Lys5-octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C51H68N10O11S2",
          "Molecular Weight": "1061.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(4R, 7S, 10S, 13S, 16S, 19R)-13-((1H-indol-3-yl)methyl)-10-(4-acetamidobutyl)-19-((R)-2-amino-3-phenylpropanamido)-16-benzyl-N-((2S, 3S)-1,3-dihydroxybutan-2-yl)-7-((R)-1-hydroxyethyl)-6, 9, 12, 15, 18-pentaoxo-1, 2-dithia-5, 8, 11, 14, 17-pentaazacycloicosane-4-carboxamide",
      structureImage: "/Acetyl-Lys5-octreotide.png",
    },
    {
      id: "impurity-20",
      name: "Acetyl-Phe1-octreotide",
      productInfo: {
        title: "Acetyl-Phe1-octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C51H68N10O11S2",
          "Molecular Weight": "1061.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(4R, 7S, 10S, 13S, 16S, 19R)-13-((1H-indol-3-yl)methyl)-19-((R)-2-acetamido-3-phenylpropanamido)-10-(4-aminobutyl)-16-benzyl-N-((2S, 3S)-1,3-dihydroxybutan-2-yl)-7-((R)-1-hydroxyethyl)-6, 9, 12, 15, 18-pentaoxo-1, 2-dithia-5, 8, 11, 14, 17-pentaazacycloicosane-4-carboxamide",
      structureImage: "/Acetyl-Phe1-octreotide.png",
    },
    {
      id: "impurity-21",
      name: "Octreotide EP Impurity E or Trisulfide Octreotide",
      productInfo: {
        title: "Octreotide EP Impurity E or Trisulfide Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C49H66N10O10S3",
          "Molecular Weight": "1051.3",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(5R, 8S, 11S, 14R, 17S, 20R)-14-((1H-indol-3-yl)methyl)-20-((R)-2-amino-3-phenylpropanamido)-11-(4-aminobutyl)-17-benzyl-N-((2R, 3R)-1,3-dihydroxybutan-2-yl)-8-((R)-1-hydroxyethyl)-7, 10, 13, 16, 19-pentaoxo-1, 2, 3-trithia-6, 9, 12, 15, 18-pentaazacyclohenicosane-5-carboxamide",
      synonym: "D-Phenylalanyl-S-sulfanyl-L-cysteinyl-L-phenylalanyl-D-tryptophyl-L-lysyl-L-threonyl-L-cysteinyl-L-threoninol cyclic (2 → 7)-trisulfide",
      structureImage: "/Octreotide-EP-Impurity-E.png",
    },
    {
      id: "impurity-22",
      name: "L-Trp4-Octreotide",
      productInfo: {
        title: "L-Trp4-Octreotide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C49H66N10O10S2",
          "Molecular Weight": "1019.25",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(4R, 7S, 10S, 13R, 16S, 19R)-13-((1H-indol-3-yl)methyl)-19-((R)-2-amino-3-phenylpropanamido)-10-(4-aminobutyl)-16-benzyl-N-((2S, 3S)-1, 3-dihydroxybutan-2-yl)-7-((R)-1-hydroxyethyl)-6, 9, 12, 15, 18-pentaoxo-1, 2-dithia-5, 8, 11, 14, 17-pentaazacycloicosane-4-carboxamide",
      structureImage: "/L-Trp4-Octreotide.png",
    },
  ],
  relatedProducts: [],
}

