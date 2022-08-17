export const filterByCategory = (products, categoryName) => {
  switch (categoryName) {
    case "CASUALS":
      return products.filter((products) => products.categoryName === "casual");

    case "SNEAKERS":
      return products.filter(
        (products) => products.categoryName === "sneakers"
      );
    case "SPORTS":
      return products.filter((products) => products.categoryName === "sports");
    case "FORMALS":
      return products.filter((products) => products.categoryName === "formals");
    case "CROCS":
      return products.filter((products) => products.categoryName === "crocs");
    default:
      return products;
  }
};
