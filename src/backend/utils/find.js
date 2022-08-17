const findArray = (id, products) => {
  return products.find((item) => item._id === id);
};
export { findArray };
