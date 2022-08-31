import React from "react";

export function filterByGender(products, category) {
  switch (category) {
    case "MALE":
      return products.filter((products) => products.category === "male");
    case "FEMALE":
      return products.filter((products) => products.category === "female");
    case "KIDS":
      return products.filter((products) => products.category === "kids");
    default:
      return products;
  }
}
