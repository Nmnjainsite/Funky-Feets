import { BsFillCartFill, BsStar } from "react-icons/bs";
import React from "react";
import { BiRupee } from "react-icons/bi";
import { useWishlist } from "../../context/wishlist-context";
import { Link, useNavigate } from "react-router-dom";
import { findArray } from "../../utils/find";
import { useItem } from "../../context/item-context";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";
function SingleProductCard({ products }) {
  const {
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
  const isInWishlist = findArray(_id, wishlistState.itemInWishlist);

  const [{ state, item }, dispatch] = useItem();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  const isInCart = findArray(_id, item);
  const cartHandler = (_id, products) => {
    if (isLoggedIn) {
      if (isInCart) {
        navigate("/Cart");
      } else {
        dispatch({
          type: "ADD_TO_CART",
          payload1: products,
        });
        toast.success("🦄 Added To Cart !", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    } else {
      toast.error("Please Login First", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  const WishlistHandler = (id, products) => {
    if (isLoggedIn) {
      if (isInWishlist) {
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
        toast.error("Removed From Wishlist", {
          position: "top-center",
          autoClose: 1000,
        });
      } else {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: products });
        toast.success("Added To Wishlist", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    } else {
      toast.error("Please Login First !", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <>
      <div className="productDetails-container">
        {/* <div className=""> */}
        <img
          src={img}
          key={img}
          className="productDetails-img"
          style={{ border: "none" }}
        ></img>
        {/* </div> */}
        <div className="productDetails-typo">
          <h3 key={name} className="product-name" style={{ fontSize: "2rem" }}>
            {name}
          </h3>
          <ToastContainer />
          <div
            style={{
              color: "#374151",
              marginTop: "-2rem",
              fontSize: "1.2rem",
            }}
          >
            {description}
            <div
              style={{
                color: "black",
                fontWeight: "bolder",
                marginTop: "0.8rem",
                fontSize: "1.5rem",
              }}
            >
              Description
            </div>
            <div
              style={{
                color: "#374151",
                marginTop: "0.3rem",
                fontSize: "1.1rem",
              }}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum
              voluptatem nihil? Quaerat ut porro iste veritatis illum maxime
              harum dicta dolor! Ipsa quae id praesentium error eos est
              asperiores?
            </div>
          </div>

          <div
            style={{
              marginTop: "0.8rem",
              fontSize: "1.1rem",
              fontFamily: "Lato,sans-serif",
              color: "black",
            }}
          >
            {fast_delivery && (
              <div style={{ marginBottom: "0.5rem" }}>
                Get Delivery In 3 Days
              </div>
            )}
          </div>

          <span
            style={{ color: "red", display: "block", fontSize: "1.5rem" }}
            key={price}
          >
            <BiRupee></BiRupee>
            {price}
          </span>

          <p
            style={{
              color: "white",
              backgroundColor: "green",
              width: "3rem",
              padding: "0.3rem",
              borderRadius: "0.3rem",
              fontSize: "1rem",
            }}
          >
            <BsStar></BsStar> {rating.rate}/{rating.count}
          </p>
          {isInCart ? (
            <button
              className="single-cart-button"
              onClick={() => navigate("/Cart")}
            >
              Go To Cart
            </button>
          ) : (
            <button
              onClick={() => cartHandler(_id, products)}
              disabled={!in_stocks}
              className="single-cart-button"
            >
              {!in_stocks ? "Out Of Stock" : "Add To Cart"}
              <BsFillCartFill></BsFillCartFill>
            </button>
          )}

          {isInWishlist ? (
            <button
              style={{ marginLeft: "0.5rem" }}
              className="single-cart-button"
              onClick={() => WishlistHandler(_id, products)}
            >
              Remove From Wishlist
            </button>
          ) : (
            <button
              style={{ marginLeft: "0.5rem" }}
              className="single-cart-button"
              onClick={() => WishlistHandler(_id, products)}
            >
              Add to Wishlist
            </button>
          )}
          <Link to="/Products" className="see-all-button">
            See All
          </Link>
        </div>
      </div>
    </>
  );
}

export default SingleProductCard;
