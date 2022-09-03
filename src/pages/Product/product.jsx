import React from "react";
import "./product.css";
import { Nav } from "../Nav/Nav";
import { FilterBar } from "../filterbar/filter-bar";
import { SortBar } from "../sort-bar";
import { ProductCard } from "./ProductCard";
import { products } from "../../backend/db/products";
import { searchData } from "../../utils/searchData";
import { sortData } from "../../utils/sortData";
import { filterData } from "../../utils/filterByTitle";
import { filterByGender } from "../../utils/filterByGender";
import { filterByCategory } from "../../utils/filterByCategories";
import { filterByDiscount } from "../../utils/filterByDiscount";
import { useFilter } from "../../context/filter-context";
import { ProductImg } from "./ProductImg";
import Empty from "../../assets/empty-cart.svg";

export default function Product() {
  const { state } = useFilter();
  const {
    sortBy,
    searchValue,
    discount,
    category,
    itemsInStocks,
    getFastDelivery,
    bestSeller,
    categoryName,
    name,
  } = state;

  function inStockItem(
    productList,
    { getFastDelivery, itemsInStocks, bestSeller }
  ) {
    return productList
      .filter(({ fast_delivery }) => (getFastDelivery ? fast_delivery : true))
      .filter(({ best_seller }) => (bestSeller ? best_seller : true))

      .filter(({ in_stocks }) => (itemsInStocks ? in_stocks : true));
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
          {getFilterData.length > 0 ? (
            getFilterData.map((getFilterData) => (
              <div>
                <ProductImg products={getFilterData} />
                <ProductCard products={getFilterData} />
              </div>
            ))
          ) : (
            <img
              src="https://img.freepik.com/premium-vector/file-found-…-magnifier-search-no-result_258153-336.jpg?w=2000"
              style={{
                width: "40vw",
                marginLeft: "25%",
                marginBottom: "2rem",
              }}
            ></img>
          )}
        </div>
      </div>
    </>
  );
}
