import React from "react";
import "./product.css";
import { Nav } from "./Nav";
import { FilterBar } from "./filter-bar";
import { SortBar } from "./sort-bar";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";

import { products } from "../backend/db/products";
import { searchData } from "../backend/utils/searchData";
import { sortData } from "../backend/utils/sortData";
import { filterData } from "../backend/utils/filterByTitle";
import { filterByGender } from "../backend/utils/filterByGender";
import { filterByCategory } from "../backend/utils/filterByCategories";
import { filterByDiscount } from "../backend/utils/filterByDiscount";
import { useFilter } from "./filter-context";
import { ProductImg } from "./ProductImg";
export default function Product() {
  const [
    {
      ADIDAS,
      PUMA,
      SPARX,
      AIR,
      LIBERTY,
      sortBy,
      searchValue,
      discount,
      categoryName,
      category,
    },
    dispatchItem,
  ] = useFilter();

  const genderItem = filterByGender(products, category);
  const categoryItem = filterByCategory(genderItem, categoryName);
  const discountItem = filterByDiscount(categoryItem, discount);
  const searchedData = searchData(discountItem, searchValue);
  const getSortedData = sortData(searchedData, sortBy);
  const getFilterData = filterData(getSortedData, {
    ADIDAS,
    PUMA,
    SPARX,
    AIR,
    LIBERTY,
  });
  return (
    <>
      <div className="App">
        <Nav />
        <FilterBar />
        <SortBar />
        <div className="product-container">
          {getFilterData &&
            getFilterData.map((getFilterData) => (
              <div>
                <ProductImg {...getFilterData} noDetail />
                <ProductCard {...getFilterData} noDetail />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
