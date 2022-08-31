import { BsFillHeartFill, BsStar, BsHeart } from "react-icons/bs";
import { useWishlist } from "../context/wishlist-context";
import { Link } from "react-router-dom";
import { findArray } from "../utils/find";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
function ProductImg({ products }) {
  const { best_seller, rating, img, _id } = products;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const isInWishlist = findArray(_id, wishlistState.itemInWishlist);
  return (
    <>
      <li className="card-container" style={{ listStyle: "none" }}>
        <div className="img-box">
          {best_seller && <span className="new-tag">Best Seller</span>}
          {isInWishlist ? (
            <BsFillHeartFill
              className="card-wishlist-emoji"
              onClick={() => {
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: _id,
                });
                toast.error("Removed From Wishlist", {
                  position: "top-center",
                  autoClose: 1000,
                });
              }}
            ></BsFillHeartFill>
          ) : (
            <BsHeart
              className="card-wishlist-emoji"
              onClick={() => {
                wishlistDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: products,
                });
                toast.success("Added To Wishlist", {
                  position: "top-center",
                  autoClose: 1000,
                });
              }}
            ></BsHeart>
          )}
          <Link to={`/ProductDetail/${_id}`}>
            <img src={img} key={img} className="product-img"></img>
          </Link>
        </div>
        <span className="rating-box">
          <BsStar></BsStar>
          {rating.rate}/{rating.count}
        </span>
      </li>
    </>
  );
}

export { ProductImg };
