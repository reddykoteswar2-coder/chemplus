/**
 * Terlipressin product data including main product and all impurities
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
  name: string // e.g., "Terlipressin EP Impurity A"
  productInfo: ProductInfo
  iupacName?: string
  synonym?: string
  smiles?: string
  structureImage?: string // Path to structure image in public folder
}

export interface TerlipressinData {
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

export const terlipressinData: TerlipressinData = {
  mainProduct: {
    id: "terlipressin",
    name: "Terlipressin",
    productInfo: {
      title: "Terlipressin",
      table: {
        "CAS NO": "14636-12-5",
        "Molecular Formula": "C52H74N16O15S2",
        "Molecular Weight": "1227.37",
        Status: "In Stock",
        "CP CAT No": "NA",
        "HSN Code": "38229010",
        "Country of Origin": "India",
        "Shipping Temperature": "Ambient",
      },
      description: "Terlipressin is an analogue of vasopressin used as a vasoactive drug to manage low blood pressure. It is a vasopressin receptor agonist.",
    },
    description: "Terlipressin is an analogue of vasopressin used as a vasoactive drug to manage low blood pressure. It is a vasopressin receptor agonist.",
  },
  impurities: [
    {
      id: "impurity-a",
      name: "Terlipressin EP Impurity A",
      productInfo: {
        title: "Terlipressin EP Impurity A",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C50H71N15O14S2",
          "Molecular Weight": "1170.33",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "Des-1-glycine-terlipressin",
      synonym: "Des-1-glycine-terlipressin",
      structureImage: "/Terlipressin-EP-Impurity-A.png",
    },
    {
      id: "impurity-b",
      name: "Terlipressin EP Impurity B",
      productInfo: {
        title: "Terlipressin EP Impurity B",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C48H68N14O13S2",
          "Molecular Weight": "1113.28",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "Des-1,2-diglycine-terlipressin",
      synonym: "Des-1,2-diglycine-terlipressin",
    },
    {
      id: "impurity-c",
      name: "Terlipressin EP Impurity C",
      productInfo: {
        title: "Terlipressin EP Impurity C",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C46H65N13O12S2",
          "Molecular Weight": "1056.23",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "Des-(1-3)-terlipressin",
      synonym: "Des-(1-3)-terlipressin",
    },
    {
      id: "impurity-d",
      name: "Terlipressin EP Impurity D",
      productInfo: {
        title: "Terlipressin EP Impurity D",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C54H76N16O16S2",
          "Molecular Weight": "1269.42",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "N1-Acetylterlipressin",
      synonym: "N1-Acetylterlipressin",
    },
    {
      id: "impurity-e",
      name: "Terlipressin EP Impurity E",
      productInfo: {
        title: "Terlipressin EP Impurity E",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H74N16O15S2",
          "Molecular Weight": "1227.38",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(S)-N-((S)-6-Amino-1-((2-amino-2-oxoethyl)amino)-1-oxohexan-2-yl)-1-((4R,7S,10S,13R,16S,19R)-7-(2-amino-2-oxoethyl)-10-(3-amino-3-oxopropyl)-19-(2-(2-(2-aminoacetamido)acetamido)acetamido)-13-benzyl-16-(4-hydroxybenzyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosane-4-carbonyl)pyrrolidine-2-carboxamide",
      synonym: "[6-D-Phenylalanine]terlipressin",
    },
    {
      id: "impurity-f",
      name: "Terlipressin EP Impurity F",
      productInfo: {
        title: "Terlipressin EP Impurity F",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H73N15O16S2",
          "Molecular Weight": "1228.37",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "3-((4R,7S,10S,13S,16S,19R)-4-((S)-2-(((S)-6-Amino-1-((2-amino-2-oxoethyl)amino)-1-oxohexan-2-yl)carbamoyl)pyrrolidine-1-carbonyl)-7-(2-amino-2-oxoethyl)-19-(2-(2-(2-aminoacetamido)acetamido)acetamido)-13-benzyl-16-(4-hydroxybenzyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosan-10-yl)propanoic Acid",
      synonym: "[7-L-Glutamic acid]terlipressin",
    },
    {
      id: "impurity-g",
      name: "Terlipressin EP Impurity G",
      productInfo: {
        title: "Terlipressin EP Impurity G",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H73N15O16S2",
          "Molecular Weight": "1228.37",
          Status: "In Stock",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(4R,8S,11S,14S,17S,20R)-4-(2-((S)-1-(((S)-6-Amino-1-((2-amino-2-oxoethyl)amino)-1-oxohexan-2-yl)amino)pyrrolidin-2-yl)-2-oxoacetyl)-11-(3-amino-3-oxopropyl)-20-(2-(2-(2-aminoacetamido)acetamido)acetamido)-14-benzyl-17-(4-hydroxybenzyl)-6,10,13,16,19-pentaoxo-1,2-dithia-5,9,12,15,18-pentaazacyclohenicosane-8-carboxylic Acid",
      synonym: "[8-L-β-Aspartic acid]terlipressin",
      smiles: "O=C([C@@H](NC([C@H](CCC(N)=O)NC([C@H](CC1=CC=CC=C1)NC([C@H](CC2=CC=C(O)C=C2)N3)=O)=O)=O)CC(N[C@H](C(C([C@H]4N(N[C@@H](CCCCN)C(NCC(N)=O)=O)CCC4)=O)=O)CSSC[C@H](NC(CNC(CNC(CN)=O)=O)=O)C3=O)=O)O",
    },
    {
      id: "impurity-h",
      name: "Terlipressin EP Impurity H",
      productInfo: {
        title: "Terlipressin EP Impurity H",
        table: {
          "CAS NO": "159594-68-0",
          "Molecular Formula": "C52H73N15O16S2",
          "Molecular Weight": "1228.37",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "Vasopressin, N-[N-(N-glycylglycyl)glycyl]-5-L-aspartic acid-8-L-lysine; 2-((4R,7S,10S,13S,16S,19R)-4-((S)-2-(((S)-6-amino-1-((2-amino-2-oxoethyl)amino)-1-oxohexan-2-yl)carbamoyl)pyrrolidine-1-carbonyl)-10-(3-amino-3-oxopropyl)-19-(2-(2-(2-aminoacetamido)acetamido)acetamido)-13-benzyl-16-(4-hydroxybenzyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosan-7-yl)acetic Acid",
      synonym: "[8-L-α-Aspartic acid]terlipressin",
    },
    {
      id: "impurity-i",
      name: "Terlipressin EP Impurity I",
      productInfo: {
        title: "Terlipressin EP Impurity I",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H73N15O16S2",
          "Molecular Weight": "1228.37",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "((4R,7S,10S,13S,16S,19R)-7-(2-Amino-2-oxoethyl)-10-(3-amino-3-oxopropyl)-19-(2-(2-(2-aminoacetamido)acetamido)acetamido)-13-benzyl-16-(4-hydroxybenzyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosane-4-carbonyl)-L-prolyl-L-lysylglycine",
      synonym: "[12-Glycine]terlipressin",
    },
    {
      id: "impurity-j",
      name: "Terlipressin EP Impurity J",
      productInfo: {
        title: "Terlipressin EP Impurity J",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C54H77N15O16S2",
          "Molecular Weight": "1256.42",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "Ethyl ((4R,7S,10S,13S,16S,19R)-7-(2-amino-2-oxoethyl)-10-(3-amino-3-oxopropyl)-19-(2-(2-(2-aminoacetamido)acetamido)acetamido)-13-benzyl-16-(4-hydroxybenzyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosane-4-carbonyl)-L-prolyl-L-lysylglycinate",
      synonym: "[12-Glycine]terlipressin Ethyl Ester",
    },
    {
      id: "impurity-k",
      name: "Terlipressin EP Impurity K",
      productInfo: {
        title: "Terlipressin EP Impurity K",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H72N14O17S2",
          "Molecular Weight": "1229.35",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "3-((4R,7S,10S,13S,16S,19R)-4-((S)-2-(((S)-6-Amino-1-((carboxymethyl)amino)-1-oxohexan-2-yl)carbamoyl)pyrrolidine-1-carbonyl)-7-(2-amino-2-oxoethyl)-19-(2-(2-(2-aminoacetamido)acetamido)acetamido)-13-benzyl-16-(4-hydroxybenzyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosan-10-yl)propanoic Acid",
      synonym: "[7-L-Glutamic acid,12-glycine]terlipressin",
    },
    {
      id: "impurity-l",
      name: "Terlipressin EP Impurity L",
      productInfo: {
        title: "Terlipressin EP Impurity L",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H72N14O17S2",
          "Molecular Weight": "1229.35",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "8-L-Aspartic acid,12-glycine]terlipressin",
      synonym: "[8-L-Aspartic acid,12-glycine]terlipressin",
    },
    {
      id: "dimer-impurity",
      name: "Terlipressin Dimer Impurity",
      productInfo: {
        title: "Terlipressin Dimer Impurity",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C104H145N31O30S4",
          "Molecular Weight": "2437.7",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "(4R,7S,10S,13S,16S,19R)-N-(2-((2-((4-((S)-6-amino-2-(((S)-2-(2-((4R,7S,10S,13S,16S,19R)-7-(2-amino-2-oxoethyl)-10-(3-amino-3-oxopropyl)-19-(2-(2-(2-aminoacetamido)acetamido)acetamido)-13-benzyl-16-(4-hydroxybenzyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosan-4-yl)-2-oxoacetyl)pyrrolidin-1-yl)amino)hexanamido)-2,3-dioxobutyl)amino)-2-oxoethyl)amino)-2-oxoethyl)-16-(2-amino-2-oxoethyl)-19-(((S)-2-((S)-7-amino-3-(2-hydrazinylacetamido)-2-oxoheptanoyl)pyrrolidin-1-yl)amino)-13-(3-amino-3-oxopropyl)-10-benzyl-7-(4-hydroxybenzyl)-6,9,12,15,18-pentaoxo-1,2-dithia-5,8,11,14,17-pentaazacycloicosane-4-carboxamide",
      synonym: "Terlipressin Dimer Impurity",
    },
    {
      id: "parallel-dimer",
      name: "Terlipressin Parallel Dimer",
      productInfo: {
        title: "Terlipressin Parallel Dimer",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C105H147N31O32S4",
          "Molecular Weight": "2483.76",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "N-(L-lysyl)-N-((S)-2-(2-((4R,7S,10S,13S,16S,19R,24R,27S,30S,33S,36S,39R)-39-(2-((S)-1-(((S)-6-amino-1-((3-amino-2,3-dioxopropyl)amino)-1-oxohexan-2-yl)amino)pyrrolidin-2-yl)-2-oxoacetyl)-7,36-bis(2-amino-2-oxoethyl)-10,33-bis(3-amino-3-oxopropyl)-19,24-bis(2-(2-(2-aminoacetamido)acetamido)acetamido)-13,30-dibenzyl-16,27-bis(4-hydroxybenzyl)-6,9,12,15,18,25,28,31,34,37-decaoxo-1,2,21,22-tetrathia-5,8,11,14,17,26,29,32,35,38-decaazacyclotetracontan-4-yl)-2-oxoacetyl)pyrrolidin-1-yl)glycine",
      synonym: "Terlipressin Parallel Dimer",
    },
    {
      id: "antiparallel-dimer",
      name: "Terlipressin Antiparallel Dimer",
      productInfo: {
        title: "Terlipressin Antiparallel Dimer",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C105H147N31O32S4",
          "Molecular Weight": "2483.76",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
      iupacName: "N-(L-lysyl)-N-((S)-2-(2-((4R,7S,10S,13S,16S,19R,24R,27S,30S,33S,36S,39R)-24-(2-((S)-1-(((S)-6-amino-1-((3-amino-2,3-dioxopropyl)amino)-1-oxohexan-2-yl)amino)pyrrolidin-2-yl)-2-oxoacetyl)-7,27-bis(2-amino-2-oxoethyl)-10,30-bis(3-amino-3-oxopropyl)-19,39-bis(2-(2-(2-aminoacetamido)acetamido)acetamido)-13,33-dibenzyl-16,36-bis(4-hydroxybenzyl)-6,9,12,15,18,26,29,32,35,38-decaoxo-1,2,21,22-tetrathia-5,8,11,14,17,25,28,31,34,37-decaazacyclotetracontan-4-yl)-2-oxoacetyl)pyrrolidin-1-yl)glycine",
      synonym: "Terlipressin Antiparallel Dimer",
    },
  ],
  relatedProducts: [
    {
      id: "d-asn8-terlipressin",
      name: "D-Asn(8) Terlipressin",
      productInfo: {
        title: "D-Asn(8) Terlipressin",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H74N16O15S2",
          "Molecular Weight": "1227.4",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
    },
    {
      id: "d-lys11-terlipressin",
      name: "D-Lys(11)-Terlipressin",
      productInfo: {
        title: "D-Lys(11)-Terlipressin",
        table: {
          "CAS NO": "Not available",
          "Molecular Formula": "C52H74N16O15S2",
          "Molecular Weight": "1227.4",
          Status: "Synthesis on demand",
          "CP CAT No": "NA",
        },
      },
    },
    {
      id: "terlipressin-acetate",
      name: "Terlipressin Acetate",
      productInfo: {
        title: "Terlipressin Acetate",
        table: {
          "CAS NO": "914453-96-6",
          "Molecular Formula": "C52H74N16O15S2 : C2H4O2",
          "Molecular Weight": "1227.4 : 60.1",
          Status: "In Stock",
          "CP CAT No": "NA",
        },
      },
    },
  ],
}

