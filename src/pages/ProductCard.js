import {
  BsFillCartFill,
  BsFillHeartFill,
  BsStar,
  BsHeart,
  BsGoogle,
} from "react-icons/bs";
import { useWishlist } from "../context/wishlist-context";
import { useItem } from "../context/item-context";
import { BiRupee } from "react-icons/bi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./product.css";
import { findArray } from "../utils/find";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function ProductCard({ products }) {
  const {
    _id,
    name,
    description,
    price,
    original_price,
    fast_delivery,
    in_stocks,
    discount,
    noDetail,
  } = products;
  const [{ state, item }, dispatch] = useItem();
  const navigate = useNavigate();

  const isInCart = findArray(_id, item);
  const cartHandler = (_id, products) => {
    if (isInCart) {
      navigate("/Cart");
    } else {
      dispatch({
        type: "ADD_TO_CART",

        payload3: Number(original_price - price),
        payload2: Number(original_price),
        payload: Number(price),

        payload1: products,
      });
      toast.success("🦄 Added To Cart !", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <li className="card-container" style={{ listStyle: "none" }}>
      <div className="product-card-typography">
        <h3 key={name} className="product-name">
          {name}
        </h3>

        <div style={{ color: "#374151", marginTop: "-0.8rem", width: "100%" }}>
          {description.slice(-25)}
        </div>

        <ToastContainer />
        <p>
          <span className="product-price" key={price}>
            <BiRupee></BiRupee>
            {price}
          </span>

          <span className="product-original-price" key={original_price}>
            Rs.
            {original_price}
          </span>

          <span key={discount} style={{ color: "green" }}>
            ({discount} % off)
          </span>
        </p>

        {isInCart ? (
          <button
            className="product-cart-button"
            onClick={() => navigate("/Cart")}
          >
            Go To Cart
          </button>
        ) : (
          <button
            onClick={() => cartHandler(_id, products)}
            disabled={!in_stocks}
            className="product-cart-button"
          >
            {!in_stocks ? "Out Of Stock" : "Add To Cart"}
          </button>
        )}
        {!noDetail && (
          <Link to={`/ProductDetail/${_id}`}>
            <button className="view-details-btn"> View Details</button>
          </Link>
        )}
      </div>
    </li>
  );
}
export { ProductCard };
