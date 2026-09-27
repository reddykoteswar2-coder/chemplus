/**
 * Semaglutide product data including main product and all impurities
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
  name: string // e.g., "Semaglutide EP Impurity A"
  productInfo: ProductInfo
  iupacName?: string
  synonym?: string
  smiles?: string
  structureImage?: string // Path to structure image in public folder
}

export interface SemaglutideData {
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

export const semaglutideData: SemaglutideData = {
  mainProduct: {
    id: "semaglutide",
    name: "Semaglutide",
    productInfo: {
      title: "Semaglutide",
      table: {
        "CAS NO": "910463-68-2",
        "Molecular Formula": "C187H291N45O59",
        "Molecular Weight": "4113.58",
        Status: "In Stock",
        "CP CAT No": "NA",
        "HSN Code": "38229010",
        "Country of Origin": "India",
        "Shipping Temperature": "Ambient",
      },
      description: "Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist used for the treatment of type 2 diabetes and obesity. It helps lower blood sugar levels and promotes weight loss.",
    },
    description: "Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist used for the treatment of type 2 diabetes and obesity. It helps lower blood sugar levels and promotes weight loss.",
  },
  impurities: [
    {
      id: "impurity-1",
      name: "D-[His]-1-Semaglutide",
      productInfo: {
        title: "D-[His]-1-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "D-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/D-His-1-Semaglutide.png",
    },
    {
      id: "impurity-2",
      name: "Des-[His]-1-Semaglutide",
      productInfo: {
        title: "Des-[His]-1-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C181H284N42O58",
          "Molecular Weight": "3976.5",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "H-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/Des-His-1-Semaglutide.png",
    },
    {
      id: "impurity-3",
      name: "[Glu]-17-Semaglutide",
      productInfo: {
        title: "[Glu]-17-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O60",
          "Molecular Weight": "4114.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Glu-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/Glu-17-Semaglutide.png",
    },
    {
      id: "impurity-4",
      name: "Des-Thr5-Semaglutide",
      productInfo: {
        title: "Des-Thr5-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C183H284N44O57",
          "Molecular Weight": "4012.45",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "H-His-Aib-Glu-Gly-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/Des-Thr5-Semaglutide.png",
    },
    {
      id: "impurity-5",
      name: "D-[Glu]15-Semaglutide",
      productInfo: {
        title: "D-[Glu]15-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-D-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/D-Glu-15-Semaglutide.png",
    },
    {
      id: "impurity-6",
      name: "Endo-Gly³¹-semaglutide",
      productInfo: {
        title: "Endo-Gly³¹-semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C189H294N46O60",
          "Molecular Weight": "4170.7",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly-Gly",
      structureImage: "/Endo-Gly-31-semaglutide.png",
    },
    {
      id: "impurity-7",
      name: "Des-[Gly]-31-Semaglutide",
      productInfo: {
        title: "Des-[Gly]-31-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C185H288N44O58",
          "Molecular Weight": "4056.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg",
      structureImage: "/Des-Gly-31-Semaglutide.png",
    },
    {
      id: "impurity-8",
      name: "[4-31]-Semaglutide",
      productInfo: {
        title: "[4-31]-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C172H270N40O54",
          "Molecular Weight": "3762.3",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/4-31-Semaglutide.png",
    },
    {
      id: "impurity-9",
      name: "D-[Asp]-9-Semaglutide",
      productInfo: {
        title: "D-[Asp]-9-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-D-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/D-Asp-9-Semaglutide.png",
    },
    {
      id: "impurity-10",
      name: "D-[Arg]-28-Semaglutide",
      productInfo: {
        title: "D-[Arg]-28-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-D-Arg-Gly-Arg-Gly",
      structureImage: "/D-Arg-28-Semaglutide.png",
    },
    {
      id: "impurity-11",
      name: "D-[Ser]-11-Semaglutide",
      productInfo: {
        title: "D-[Ser]-11-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-D-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/D-Ser-11-Semaglutide.png",
    },
    {
      id: "impurity-12",
      name: "D-[Ser]-8-Semaglutide",
      productInfo: {
        title: "D-[Ser]-8-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-Phe-Thr-D-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/D-Ser-8-Semaglutide.png",
    },
    {
      id: "impurity-13",
      name: "D-[Phe]-6-Semaglutide",
      productInfo: {
        title: "D-[Phe]-6-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-D-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/D-Phe-6-Semaglutide.png",
    },
    {
      id: "impurity-14",
      name: "D-[Phe]-22-Semaglutide",
      productInfo: {
        title: "D-[Phe]-22-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-D-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/D-Phe-22-Semaglutide.png",
    },
    {
      id: "impurity-15",
      name: "Des-Aib2-Semaglutide",
      productInfo: {
        title: "Des-Aib2-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C183H284N44O58",
          "Molecular Weight": "4028.5",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-D-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/Des-Aib2-Semaglutide.png",
    },
    {
      id: "impurity-16",
      name: "Des-[Oct-γ-Glu-AEEA-AEEA]-Semaglutide",
      productInfo: {
        title: "Des-[Oct-γ-Glu-AEEA-AEEA]-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C152H230N42O47",
          "Molecular Weight": "3397.8",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys-Glu-D-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/Des-Oct-g-Glu-AEEA-AEEA-Semaglutide.png",
    },
    {
      id: "impurity-17",
      name: "Des-[His-Aib]-Semaglutide",
      productInfo: {
        title: "Des-[His-Aib]-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C177H277N41O57",
          "Molecular Weight": "3891.39",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-D-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/Des-His-Aib-Semaglutide.png",
    },
    {
      id: "impurity-18",
      name: "Beta-Asp-9-Semaglutide",
      productInfo: {
        title: "Beta-Asp-9-Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H291N45O59",
          "Molecular Weight": "4113.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Beta-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEA-AEEA-γ-Glu-Octadecanedioic)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly",
      structureImage: "/Beta-Asp-9-Semaglutide.png",
    },
    {
      id: "impurity-19",
      name: "2-Oxo-His Semaglutide",
      productInfo: {
        title: "2-Oxo-His Semaglutide",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C187H289N45O60",
          "Molecular Weight": "4127.6",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName:
        "(3S,9S,12S,15S,18S,21S,24S,27S,30S,33S,36S,39S,45S,48S,51S,54S,81R)-54-(((6S,12S,15S,18S,21S,24S,27S,30S,33S)-21-((1H-indol-3-yl)methyl)-1-amino-30-benzyl-27-((S)-sec-butyl)-35-carboxy-6-((carboxymethyl)carbamoyl)-12-(3-guanidinopropyl)-1-imino-18-isobutyl-15-isopropyl-24-methyl-8,11,14,17,20,23,26,29,32-nonaoxo-2,7,10,13,16,19,22,25,28,31-decaazapentatriacontan-33-yl)carbamoyl)-3-(2-((S)-2-amino-3-(2-oxo-2H-imidazol-4-yl)propanamido)-2-methylpropanamido)-45-(3-amino-3-oxopropyl)-12-benzyl-39-(2-carboxyethyl)-21-(carboxymethyl)-33-(4-hydroxybenzyl)-9,15-bis((R)-1-hydroxyethyl)-18,27,30-tris(hydroxymethyl)-36-isobutyl-24-isopropyl-48,51-dimethyl-4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,60,69,78,83-henicosaoxo-62,65,71,74-tetraoxa-5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,59,68,77,82-henicosaazanonanonacontane-1,81,99-tricarboxylic acid",
      structureImage: "/2-Oxo-His-Semaglutide.png",
    },
  ],
  relatedProducts: [],
}

