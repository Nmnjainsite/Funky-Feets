import React from "react";

export function searchData(products, val) {
  if (val) {
    return products.filter((products) =>
      products.name.toLowerCase().includes(val)
    );
  } else {
    return products;
  }
}
