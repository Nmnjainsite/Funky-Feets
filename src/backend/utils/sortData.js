export function sortData(products, sortBy) {
  if (sortBy === "low-price") {
    return products.sort((a, b) => a["price"] - b["price"]);
  }
  if (sortBy === "high-price") {
    return products.sort((a, b) => b["price"] - a["price"]);
  }
  if (sortBy === "low-rating") {
    return products.sort((a, b) => a.rating["rate"] - b.rating["rate"]);
  }
  if (sortBy === "high-rating") {
    return products.sort((a, b) => b.rating["rate"] - a.rating["rate"]);
  }
  if (sortBy === "default") {
    return products;
  }
  return products;
}
