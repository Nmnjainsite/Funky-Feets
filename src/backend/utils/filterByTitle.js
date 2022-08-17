export function filterData(products, { ADIDAS, PUMA, SPARX, AIR, LIBERTY }) {
  return products
    .filter((products) => (products.name === "adidas" ? true : ADIDAS))
    .filter((products) => (products.name === "Puma" ? true : PUMA))
    .filter((products) => (products.name === "Sparx" ? true : SPARX))
    .filter((products) => (products.name === "Air Max" ? true : AIR))
    .filter((products) => (products.name === "Liberty" ? true : LIBERTY));
}
