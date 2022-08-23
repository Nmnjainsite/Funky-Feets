import {
  BsFillCartFill,
  BsFillHeartFill,
  BsStar,
  BsHeart,
} from "react-icons/bs";
import { useWishlist } from "../context/wishlist-context";
import { useItem } from "../context/item-context";
import { BiRupee } from "react-icons/bi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./product.css";
import { findArray } from "../backend/utils/find";
import { products } from "../backend/db/products";
function ProductCard({
  _id,
  name,
  description,
  price,
  qty,
  best_seller,
  original_price,
  fast_delivery,
  in_stocks,
  discount,
  color,
  img,
  rating,
  noDetail,
}) {
  const [{ state, item }, dispatch] = useItem();
  const [{ itemsInWishlist, itemValue }, wishlistDispatch] = useWishlist();
  const { navigate } = useNavigate();

  const isInCart = findArray(_id, item);
  const cartHandler = (_id, products) => {
    if (isInCart) {
      navigate("./Cart");
    } else {
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
      });
    }
  };

  return (
    <li className="card-container" style={{ listStyle: "none" }}>
      <div className="product-card-typography">
        <h3 key={name} className="product-name">
          {name}
        </h3>
        <div style={{ color: "#374151", marginTop: "-0.8rem" }}>
          {description}
        </div>
        {!noDetail && (
          <p>
            <span
              style={{ color: "red", display: "block", marginTop: "-1rem" }}
              key={price}
            >
              <BiRupee></BiRupee>
              {price}
            </span>

            <span
              key={original_price}
              style={{
                textDecoration: "line-through",
                fontSize: "1rem",
                margin: "0.5rem",
              }}
            >
              Rs.
              {original_price}
            </span>

            <span key={discount} style={{ color: "green", fontSize: "1rem" }}>
              ({discount} % off)
            </span>
          </p>
        )}
        {!noDetail && (
          <div>
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
            </p>{" "}
          </div>
        )}
        <div
          style={{
            margin: "0.5rem",
            fontSize: "1rem",
            fontFamily: "Lato,sans-serif",
            color: "grey",
          }}
        >
          {fast_delivery && (
            <div style={{ marginBottom: "0.5rem" }}>Get Delivery In 3 Days</div>
          )}
          {in_stocks && <div>In Stocks Available</div>}
        </div>
        {noDetail && (
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
        )}
        <button
          className="product-cart-button"
          onClick={() => cartHandler(_id, products)}
        >
          {isInCart ? "Go To Cart" : "Add To Cart"}
          <BsFillCartFill></BsFillCartFill>
        </button>
        {noDetail && (
          <Link to={`/ProductDetail/${_id}`}>
            <button className="view-details-btn"> View Details</button>
          </Link>
        )}
        {!noDetail && (
          <button
            className="product-cart-button"
            style={{ margin: "0.3rem", backgroundColor: "#374151" }}
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
          >
            Add To Wishlist <BsFillHeartFill></BsFillHeartFill>
          </button>
        )}
      </div>
    </li>
  );
}
export { ProductCard };
