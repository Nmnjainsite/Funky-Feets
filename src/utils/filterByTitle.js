import React from "react";
export function filterData(products, name) {
  switch (name) {
    case "ADIDAS":
      return products.filter((products) => products.name === "adidas");
    case "PUMA":
      return products.filter((products) => products.name === "Puma");
    case "SPARX":
      return products.filter((products) => products.name === "Sparx");
    case "AIR":
      return products.filter((products) => products.name === "Air Max");
    case "LIBERTY":
      return products.filter((products) => products.name === "Liberty");
    default:
      return products;
  }
}
