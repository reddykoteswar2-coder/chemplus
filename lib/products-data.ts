/**
 * Shared products data for search functionality
 * Includes all main products, Terlipressin, Octreotide and Semaglutide impurities
 */

import { terlipressinData } from "./terlipressin-data"
import { octreotideData } from "./octreotide-data"
import { semaglutideData } from "./semaglutide-data"

export interface SearchableProduct {
  id: string
  name: string
  category: string
  casNo?: string
  molecularFormula?: string
  molecularWeight?: string
  status?: string
  szCatNo?: string
  href: string
  type: "main" | "impurity" | "related"
}

// Main products from products page
const mainProducts = [
  {
    letter: "a",
    category: "ABALOPARATIDE",
    productinfo: {
      title: "Abaloparatide",
      table: {
        "CAS NO": "247062-33-5",
        "Molecular Formula": "C174H300N56O49",
        "Molecular Weight": "3961.59",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "d",
    category: "DESMOPRESSIN",
    productinfo: {
      title: "Desmopressin",
      table: {
        "CAS NO": "16679-58-6",
        "Molecular Formula": "C46H64N14O12S2",
        "Molecular Weight": "1069.22",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "g",
    category: "GLUCAGON",
    productinfo: {
      title: "Glucagon",
      table: {
        "CAS NO": "16941-32-5",
        "Molecular Formula": "C153H225N43O49S",
        "Molecular Weight": "3482.75",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "i",
    category: "ICATIBANT",
    productinfo: {
      title: "Icatibant",
      table: {
        "CAS NO": "138614-30-9",
        "Molecular Formula": "C59H89N19O13S",
        "Molecular Weight": "1304.53",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "l",
    category: "LANREOTIDE",
    productinfo: {
      title: "Lanreotide",
      table: {
        "CAS NO": "108736-35-2",
        "Molecular Formula": "C54H69N11O10S2",
        "Molecular Weight": "1096.32",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "l",
    category: "LEUPROLIDE",
    productinfo: {
      title: "Leuprolide",
      table: {
        "CAS NO": "53714-56-0",
        "Molecular Formula": "C59H84N16O12",
        "Molecular Weight": "1209.40",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "l",
    category: "LINACLOTIDE",
    productinfo: {
      title: "Linaclotide",
      table: {
        "CAS NO": "851199-59-2",
        "Molecular Formula": "C65H104N18O26S4",
        "Molecular Weight": "1681.89",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "l",
    category: "LIRAGLUTIDE",
    productinfo: {
      title: "Liraglutide",
      table: {
        "CAS NO": "204656-20-2",
        "Molecular Formula": "C172H265N43O51",
        "Molecular Weight": "3751.20",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "o",
    category: "OCTREOTIDE",
    productinfo: {
      title: "Octreotide",
      table: {
        "CAS NO": "83150-76-9",
        "Molecular Formula": "C49H66N10O10S2",
        "Molecular Weight": "1019.24",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "p",
    category: "PLECANATIDE",
    productinfo: {
      title: "Plecanatide",
      table: {
        "CAS NO": "467426-54-6",
        "Molecular Formula": "C65H104N18O26S4",
        "Molecular Weight": "1681.89",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "r",
    category: "RETATRUTIDE",
    productinfo: {
      title: "Retatrutide",
      table: {
        "CAS NO": "2381089-83-2",
        "Molecular Formula": "C250H394N66O68S",
        "Molecular Weight": "5529.31",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "s",
    category: "SEMAGLUTIDE",
    productinfo: {
      title: "Semaglutide",
      table: {
        "CAS NO": "910463-68-2",
        "Molecular Formula": "C187H291N45O59",
        "Molecular Weight": "4113.58",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "t",
    category: "TEDUGLUTIDE",
    productinfo: {
      title: "Teduglutide",
      table: {
        "CAS NO": "197922-42-2",
        "Molecular Formula": "C164H252N44O55S",
        "Molecular Weight": "3752.13",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "t",
    category: "TERIPARATIDE",
    productinfo: {
      title: "Teriparatide",
      table: {
        "CAS NO": "52232-67-4",
        "Molecular Formula": "C181H291N55O51S2",
        "Molecular Weight": "4117.72",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "t",
    category: "TERLIPRESSIN",
    productinfo: {
      title: "Terlipressin",
      table: {
        "CAS NO": "14636-12-5",
        "Molecular Formula": "C52H74N16O15S2",
        "Molecular Weight": "1227.37",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "t",
    category: "TIRZEPATIDE",
    productinfo: {
      title: "Tirzepatide",
      table: {
        "CAS NO": "2023788-19-2",
        "Molecular Formula": "C225H348N48O68",
        "Molecular Weight": "4813.45",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "v",
    category: "VOSORITIDE",
    productinfo: {
      title: "Vosoritide",
      table: {
        "CAS NO": "1391048-45-7",
        "Molecular Formula": "C191H296N58O59S",
        "Molecular Weight": "4370.87",
        Status: "In Stock",
      },
    },
  },
]

/**
 * Get all searchable products including main products and Terlipressin impurities
 */
export function getAllSearchableProducts(): SearchableProduct[] {
  const products: SearchableProduct[] = []

  // Add main products (skip Terlipressin, Octreotide and Semaglutide as they're added separately with more complete data)
  mainProducts.forEach((product) => {
    // Skip Terlipressin, Octreotide and Semaglutide as they will be added separately with more complete data
    if (product.category === "TERLIPRESSIN" || product.category === "OCTREOTIDE" || product.category === "SEMAGLUTIDE") {
      return
    }
    
    const title = product.productinfo?.title || product.category
    const slug = title.toLowerCase().replace(/\s+/g, "-")
    
    products.push({
      id: slug,
      name: title,
      category: product.category,
      casNo: product.productinfo?.table?.["CAS NO"],
      molecularFormula: product.productinfo?.table?.["Molecular Formula"],
      molecularWeight: product.productinfo?.table?.["Molecular Weight"],
      status: product.productinfo?.table?.Status,
      href: `/products/${slug}`,
      type: "main",
    })
  })

  // Add Terlipressin main product
  products.push({
    id: "terlipressin",
    name: terlipressinData.mainProduct.name,
    category: "TERLIPRESSIN",
    casNo: terlipressinData.mainProduct.productInfo.table["CAS NO"],
    molecularFormula: terlipressinData.mainProduct.productInfo.table["Molecular Formula"],
    molecularWeight: terlipressinData.mainProduct.productInfo.table["Molecular Weight"],
    status: terlipressinData.mainProduct.productInfo.table.Status,
    szCatNo: terlipressinData.mainProduct.productInfo.table["CP CAT No"],
    href: "/products/terlipressin",
    type: "main",
  })

  // Add Terlipressin impurities
  terlipressinData.impurities.forEach((impurity) => {
    products.push({
      id: impurity.id,
      name: impurity.name,
      category: "TERLIPRESSIN",
      casNo: impurity.productInfo.table["CAS NO"],
      molecularFormula: impurity.productInfo.table["Molecular Formula"],
      molecularWeight: impurity.productInfo.table["Molecular Weight"],
      status: impurity.productInfo.table.Status,
      szCatNo: impurity.productInfo.table["CP CAT No"],
      href: `/products/terlipressin/${impurity.id}`,
      type: "impurity",
    })
  })

  // Add related products
  terlipressinData.relatedProducts.forEach((product) => {
    products.push({
      id: product.id,
      name: product.name,
      category: "TERLIPRESSIN",
      casNo: product.productInfo.table["CAS NO"],
      molecularFormula: product.productInfo.table["Molecular Formula"],
      molecularWeight: product.productInfo.table["Molecular Weight"],
      status: product.productInfo.table.Status,
      szCatNo: product.productInfo.table["CP CAT No"],
      href: `/products/terlipressin?related=${product.id}`,
      type: "related",
    })
  })

  // Add Octreotide main product
  products.push({
    id: "octreotide",
    name: octreotideData.mainProduct.name,
    category: "OCTREOTIDE",
    casNo: octreotideData.mainProduct.productInfo.table["CAS NO"],
    molecularFormula: octreotideData.mainProduct.productInfo.table["Molecular Formula"],
    molecularWeight: octreotideData.mainProduct.productInfo.table["Molecular Weight"],
    status: octreotideData.mainProduct.productInfo.table.Status,
    szCatNo: octreotideData.mainProduct.productInfo.table["CP CAT No"],
    href: "/products/octreotide",
    type: "main",
  })

  // Add Octreotide impurities
  octreotideData.impurities.forEach((impurity) => {
    products.push({
      id: impurity.id,
      name: impurity.name,
      category: "OCTREOTIDE",
      casNo: impurity.productInfo.table["CAS NO"],
      molecularFormula: impurity.productInfo.table["Molecular Formula"],
      molecularWeight: impurity.productInfo.table["Molecular Weight"],
      status: impurity.productInfo.table.Status,
      szCatNo: impurity.productInfo.table["CP CAT No"],
      href: `/products/octreotide/${impurity.id}`,
      type: "impurity",
    })
  })

  // Add Octreotide related products
  octreotideData.relatedProducts.forEach((product) => {
    products.push({
      id: product.id,
      name: product.name,
      category: "OCTREOTIDE",
      casNo: product.productInfo.table["CAS NO"],
      molecularFormula: product.productInfo.table["Molecular Formula"],
      molecularWeight: product.productInfo.table["Molecular Weight"],
      status: product.productInfo.table.Status,
      szCatNo: product.productInfo.table["CP CAT No"],
      href: `/products/octreotide?related=${product.id}`,
      type: "related",
    })
  })

  // Add Semaglutide main product
  products.push({
    id: "semaglutide",
    name: semaglutideData.mainProduct.name,
    category: "SEMAGLUTIDE",
    casNo: semaglutideData.mainProduct.productInfo.table["CAS NO"],
    molecularFormula: semaglutideData.mainProduct.productInfo.table["Molecular Formula"],
    molecularWeight: semaglutideData.mainProduct.productInfo.table["Molecular Weight"],
    status: semaglutideData.mainProduct.productInfo.table.Status,
    szCatNo: semaglutideData.mainProduct.productInfo.table["CP CAT No"],
    href: "/products/semaglutide",
    type: "main",
  })

  // Add Semaglutide impurities
  semaglutideData.impurities.forEach((impurity) => {
    products.push({
      id: impurity.id,
      name: impurity.name,
      category: "SEMAGLUTIDE",
      casNo: impurity.productInfo.table["CAS NO"],
      molecularFormula: impurity.productInfo.table["Molecular Formula"],
      molecularWeight: impurity.productInfo.table["Molecular Weight"],
      status: impurity.productInfo.table.Status,
      szCatNo: impurity.productInfo.table["CP CAT No"],
      href: `/products/semaglutide/${impurity.id}`,
      type: "impurity",
    })
  })

  // Add Semaglutide related products
  semaglutideData.relatedProducts.forEach((product) => {
    products.push({
      id: product.id,
      name: product.name,
      category: "SEMAGLUTIDE",
      casNo: product.productInfo.table["CAS NO"],
      molecularFormula: product.productInfo.table["Molecular Formula"],
      molecularWeight: product.productInfo.table["Molecular Weight"],
      status: product.productInfo.table.Status,
      szCatNo: product.productInfo.table["CP CAT No"],
      href: `/products/semaglutide?related=${product.id}`,
      type: "related",
    })
  })

  return products
}

/**
 * Search products by query
 */
export function searchProducts(query: string, limit: number = 10): SearchableProduct[] {
  if (!query.trim()) return []

  const allProducts = getAllSearchableProducts()
  const searchTerm = query.toLowerCase().trim()

  const matches = allProducts.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchTerm)
    const casMatch = product.casNo?.toLowerCase().includes(searchTerm)
    const formulaMatch = product.molecularFormula?.toLowerCase().includes(searchTerm)
    const catNoMatch = product.szCatNo?.toLowerCase().includes(searchTerm)
    const categoryMatch = product.category.toLowerCase().includes(searchTerm)

    return nameMatch || casMatch || formulaMatch || catNoMatch || categoryMatch
  })

  return matches.slice(0, limit)
}

