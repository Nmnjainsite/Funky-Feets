import { BsXLg, BsFillHeartFill, BsHeart, BsStar } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import React, { useEffect } from "react";
import { useItem } from "../../context/item-context";
import { useWishlist } from "../../context/wishlist-context";
import { Footer } from "../footer/footer";
import "./cart.css";
import { findArray } from "../../utils/find";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const CardView = ({ products }) => {
  const {
    rating,
    img,
    _id,
    price,
    description,
    discount,
    original_price,
    qty,
    noDetail,
  } = products;
  const [{ item }, dispatch] = useItem();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const isInWishlist = findArray(_id, wishlistState.itemInWishlist);

  return (
    <div className="card-view-container">
      <ul className="wishlist-container">
        <li className="wishlist-cart ">
          <div className="img-col-1 ">
            <Link to={`/ProductDetail/${_id}`}>
              <img src={img} className="cart-image" key={img}></img>
            </Link>
          </div>

          <div className="wishlist-cart-typography">
            <div>
              <h3 key={description}> {description}</h3>
            </div>
            <div>
              <h3 style={{ display: "inline", color: "red" }} key={price}>
                <BiRupee></BiRupee>
                {price}
              </h3>
              <span
                style={{
                  textDecoration: "line-through",
                  margin: "0.3rem",
                }}
                key={original_price}
              >
                {" "}
                Rs.{original_price}
              </span>
              <span style={{ color: "green" }} key={discount}>
                ({discount}% off)
              </span>
              <p
                style={{
                  display: "block",
                  color: "white",
                  backgroundColor: "green",
                  width: "2.5rem",
                  padding: "0.3rem",
                  borderRadius: "0.3rem",
                  fontSize: "0.8rem",
                }}
              >
                <BsStar></BsStar> {rating.rate}/{rating.count}
              </p>
            </div>
            <div>
              <button
                className="minus-button"
                onClick={() =>
                  dispatch({
                    type: "DECREMENT_QTY",
                    payload: _id,
                  })
                }
              >
                -
              </button>
              <span style={{ margin: "0.3rem" }}>{qty}</span>
              <button
                className="minus-button"
                onClick={() =>
                  dispatch({
                    type: "INCREMENT_QTY",
                    payload: _id,
                  })
                }
              >
                +
              </button>
              <div>
                {/* {!noDetail && (
                  <Link to={`/ProductDetail/${_id}`}>
                    <button className="view-details-btn"> View Details</button>
                  </Link>
                )} */}
              </div>
            </div>
          </div>
        </li>
        <div className="tags">
          {isInWishlist ? (
            <BsFillHeartFill
              style={{ fontSize: "1rem" }}
              className="card-wishlist-emoji"
              onClick={() => {
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: _id,
                });
                toast.error(" Removed From Wishlist !", {
                  position: "top-center",
                  autoClose: 1000,
                });
              }}
            ></BsFillHeartFill>
          ) : (
            <BsHeart
              style={{ fontSize: "1rem" }}
              className="card-wishlist-emoji"
              onClick={() => {
                wishlistDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: products,
                });
                toast.success(" Added To Wishlist !", {
                  position: "top-center",
                  autoClose: 1000,
                });
              }}
            ></BsHeart>
          )}
          <div>
            <AiFillDelete
              style={{
                fontSize: "1.1rem",
              }}
              className="card-wishlist-emoji"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: _id,
                });
                toast.error(" Removed From Cart !", {
                  position: "top-center",
                  autoClose: 1000,
                });
              }}
            ></AiFillDelete>
          </div>
        </div>
      </ul>
      <ToastContainer />
    </div>
  );
};

export default CardView;
