import React from "react";
import "./product.css";
import { useWishlist } from "./wishlist-context";
import { findArray } from "../backend/utils/find";

import {
  BsFillCartFill,
  BsFillHeartFill,
  BsStar,
  BsHeart,
} from "react-icons/bs";

import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { products } from "../backend/db/products";
import { searchData } from "../backend/utils/searchData";
import { sortData } from "../backend/utils/sortData";
import { filterData } from "../backend/utils/filterByTitle";
import { filterByGender } from "../backend/utils/filterByGender";
import { filterByCategory } from "../backend/utils/filterByCategories";
import { filterByDiscount } from "../backend/utils/filterByDiscount";
import { useFilter } from "./filter-context";
import { useItem } from "./item-context";
import { Nav } from "./Nav";
import { FilterBar } from "./filter-bar";
import { SortBar } from "./sort-bar";

export default function Product() {
  const [{ value }, dispatch] = useItem();
  const [{ itemsInWishlist, itemValue }, wishlistDispatch] = useWishlist();
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
    <div className="App">
      <Nav />
      <FilterBar />
      <SortBar />

      <div className="product-container">
        {getFilterData &&
          getFilterData.map(
            ({
              _id,
              name,
              description,
              price,
              qty,
              best_seller,
              original_price,
              discount,
              color,
              img,
              rating,
            }) => (
              <li className="card-container">
                <div className="img-box">
                  {best_seller && <span className="new-tag">Best Seller</span>}

                  <BsFillHeartFill
                    className="card-wishlist-emoji"
                    onClick={() =>
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",

                        payload: {
                          id: _id,
                          name: name,
                          price: Number(price),
                          description: description,
                          best_seller: best_seller,
                          discount: discount,
                          original_price: original_price,
                          rating: rating,
                          img: img,
                          qty: Number(qty),
                          color: color,
                        },
                      })
                    }
                  />

                  <img src={img} key={img} className="product-img"></img>
                  <span className="rating-box">
                    <BsStar></BsStar>
                    {rating.rate}/{rating.count}
                  </span>
                </div>
                <div className="product-card-typography">
                  <h3 key={name} className="product-name">
                    {name}
                  </h3>
                  <small style={{ color: "grey" }} key={description}>
                    {description}
                  </small>
                  <p>
                    <span className="product-price" key={price}>
                      <BiRupee></BiRupee> {price}
                    </span>

                    <span
                      className="product-original-price"
                      key={original_price}
                    >
                      Rs.
                      {original_price}
                    </span>

                    <span key={discount} style={{ color: "green" }}>
                      ({discount} % off)
                    </span>
                  </p>
                  <Link to="/Cart">
                    <button
                      className="product-cart-button"
                      onClick={() =>
                        dispatch({
                          type: "even",

                          payload3: Number(original_price - price),
                          payload2: Number(original_price),
                          payload: Number(price),

                          payload1: {
                            id: _id,
                            name: name,
                            price: Number(price),
                            description: description,
                            best_seller: best_seller,
                            discount: discount,
                            original_price: original_price,
                            rating: rating,
                            img: img,
                            qty: Number(qty),
                            color: color,
                          },
                        })
                      }
                    >
                      Add To Cart <BsFillCartFill></BsFillCartFill>
                    </button>
                  </Link>
                </div>
              </li>
            )
          )}
      </div>
    </div>
  );
}
