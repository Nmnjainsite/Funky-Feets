import React from "react";
import "./product.css";
import { useWishlist } from "../context/wishlist-context";
import { AiFillDelete } from "react-icons/ai";
import { findArray } from "../utils/find";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";
import { useItem } from "../context/item-context";
import { BsFillCartFill, BsStar } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
function WishlistCardView({ products }) {
  const {
    best_seller,
    rating,
    img,
    _id,
    name,
    price,
    description,
    discount,
    original_price,
    fast_delivery,
    in_stocks,
  } = products;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const [{ state, item }, dispatch] = useItem();
  const navigate = useNavigate();
  const isInCart = findArray(_id, item);
  const cartHandler = (id, products) => {
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
        fontSize: "1rem",
      });
    }
  };
  return (
    <div className="App">
      <ToastContainer style={{ fontSize: "1rem" }} />
      <li className="wishcard-container">
        <AiFillDelete
          className="wishcard-wishlist-emoji"
          onClick={() => {
            wishlistDispatch({
              type: "REMOVE_FROM_WISHLIST",
              payload: _id,
            });
            toast.error(" Removed From Wishlist !", {
              position: "top-center",
              autoClose: 1000,
              fontSize: "1rem",
            });
          }}
        />
        <div className="wishlist-img-box">
          {best_seller && <span className="new-tag">Best Seller</span>}

          <img src={img} key={img} className="wish-img"></img>
        </div>
        <span className="rating-box" key={rating}>
          <BsStar></BsStar>
          {rating.rate}/{rating.count}
        </span>
        <div className="wish-card-typography">
          <h3 style={{ textAlign: "left" }} key={name}>
            {name}
          </h3>
          <div
            key={description}
            style={{ top: "-0.8rem", position: "relative" }}
          >
            {description}
          </div>{" "}
          <p
            className="product-price"
            key={price}
            style={{ marginTop: "-0.4rem" }}
          >
            <BiRupee></BiRupee> {price}
          </p>
          <h3></h3>
          <div className="wishcard-typo-skin">
            {" "}
            <span className="wishlist-original-price" key={original_price}>
              Rs.
              {original_price}
            </span>
            <span key={discount} style={{ color: "green" }}>
              ({discount} % off)
            </span>
          </div>
          {isInCart ? (
            <button
              className="wishlist-cart-button"
              onClick={() => navigate("/Cart")}
            >
              Go To Cart
            </button>
          ) : (
            <button
              onClick={() => cartHandler(_id, products)}
              disabled={!in_stocks}
              className="wishlist-cart-button"
            >
              {!in_stocks ? "Out Of Stock" : "Add To Cart"}
              <BsFillCartFill></BsFillCartFill>
            </button>
          )}
        </div>
      </li>
    </div>
  );
}

export default WishlistCardView;
