import {
  BsFillCartFill,
  BsFillHeartFill,
  BsStar,
  BsHeart,
} from "react-icons/bs";
import { useWishlist } from "./wishlist-context";
import { useItem } from "./item-context";
import { BiRupee } from "react-icons/bi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./product.css";

function ProductCard({
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
  noDetail,
}) {
  const [{ value }, dispatch] = useItem();
  const [{ itemsInWishlist, itemValue }, wishlistDispatch] = useWishlist();
  const { navigate } = useNavigate();
  return (
    <li className="card-container" style={{ listStyle: "none" }}>
      <div className="product-card-typography">
        <h3 key={name} className="product-name">
          {name}
        </h3>
        <div style={{ color: "grey", marginTop: "-0.8rem" }}>{description}</div>
        {!noDetail && (
          <p>
            <span style={{ color: "red", display: "block" }} key={price}>
              <BiRupee></BiRupee>
              {price}
            </span>

            <span
              key={original_price}
              style={{
                textDecoration: "line-through",
                fontSize: "1.5rem",
                margin: "1rem",
              }}
            >
              Rs.
              {original_price}
            </span>

            <span key={discount} style={{ color: "green" }}>
              ({discount} % off)
            </span>
          </p>
        )}
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
          {dispatch ? "Add To Cart" : navigate("/Login")}
          <BsFillCartFill></BsFillCartFill>
        </button>

        {!noDetail && (
          <button
            className="product-cart-button"
            style={{ margin: "0.3rem", backgroundColor: "grey" }}
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
        {/* {noDetail && (
          <Link
            to={`/ProductDetail/${_id}`}
            style={{
              fontSize: "0.8rem",

              textDecoration: "none",
              backgroundColor: "grey",
              color: "black",
              padding: "0.3rem 0.5rem",
              borderRadius: "0.3rem",
              position: "relative",
              top: "1rem",
            }}
          >
            See
          </Link>
        )} */}
      </div>
    </li>
  );
}
export { ProductCard };
