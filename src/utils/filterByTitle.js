import React from "react";

// const filterData = (products, name) => {
//   let filterItem = [];
//   for (let title in name) {
//     if (name[title]) {
//       const result = products.filter((item) => item.name === title);
//       filterItem.unshift(...result);
//     }
//   }

//   return filterItem.length === 0 ? products : filterItem;
// };

// export { filterData };

// import React from 'react'

const filterData = (products, name) => {
  const filterBrand = [];

  for (let title in name) {
    if (name[title]) {
      const result = products.filter((item) => item.name === title);
      filterBrand.unshift(...result);
    }
  }
  return filterBrand.length === 0 ? products : filterBrand;
};

export { filterData };
