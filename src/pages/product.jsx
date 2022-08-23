import React from "react";
import "./product.css";
import { Nav } from "./Nav";
import { FilterBar } from "./filter-bar";
import { SortBar } from "./sort-bar";
import { ProductCard } from "./ProductCard";
import { products } from "../backend/db/products";
import { searchData } from "../utils/searchData";
import { sortData } from "../utils/sortData";
import { filterData } from "../utils/filterByTitle";
import { filterByGender } from "../utils/filterByGender";
import { filterByCategory } from "../utils/filterByCategories";
import { filterByDiscount } from "../utils/filterByDiscount";
import { useFilter } from "../context/filter-context";
import { ProductImg } from "./ProductImg";
export default function Product() {
  const [
    {
      // ADIDAS,
      // PUMA,
      // SPARX,
      // AIR,
      // LIBERTY,
      name,
      sortBy,
      searchValue,
      discount,
      categoryName,
      category,
      getFastDelivery,
      itemsInStocks,
      bestSeller,
    },
    dispatchItem,
  ] = useFilter();

  function inStockItem(
    productList,
    { getFastDelivery, itemsInStocks, bestSeller }
  ) {
    return productList
      .filter(({ fast_delivery }) => (getFastDelivery ? fast_delivery : true))
      .filter(({ best_seller }) => (bestSeller ? best_seller : true))

      .filter(({ in_stocks }) => (itemsInStocks ? true : in_stocks));
  }

  const genderItem = filterByGender(products, category);
  const categoryItem = filterByCategory(genderItem, categoryName);
  const discountItem = filterByDiscount(categoryItem, discount);
  const searchedData = searchData(discountItem, searchValue);
  const getSortedData = sortData(searchedData, sortBy);
  const getItem = inStockItem(getSortedData, {
    getFastDelivery,
    itemsInStocks,
    bestSeller,
  });

  const getFilterData = filterData(getItem, name);
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
