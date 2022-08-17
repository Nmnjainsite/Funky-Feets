import React from "react";
import { useItem } from "./item-context";
export function ProductCard({
  _id,
  name,
  description,
  price,
  best_seller,
  original_price,
  discount,
  img,
  rate,
  count,
}) {
  const [{ item }, dispatch] = useItem();
  return (
    <li className="card-container">
      <div className="img-box">
        {best_seller && <span className="new-tag">Best Seller</span>}

        <img src={img} key={img} className="product-img"></img>
        <span className="rating-box">
          {rate}/{count}
        </span>
      </div>
      <div className="product-card-typography">
        <h3 key={name}>{name}</h3>
        <small style={{ color: "grey", margin: "-2rem" }} key={description}>
          {description}
        </small>
        <p>
          <span style={{ color: "red", fontSize: "1.3rem" }} key={price}>
            {price}
          </span>
          <span
            style={{
              textDecoration: "line-through",
              margin: "0.4rem",
            }}
            key={original_price}
          >
            Rs.{original_price}
          </span>
          <span key={discount}>({discount} % OFF)</span>
        </p>

        <button
          className="product-cart-button"
          onClick={() =>
            dispatch({
              type: "even",
              payload: _id,
              payload1: name,
              payload2: img,
              payload3: Number(original_price),
              // payload4: description,
            })
          }
        >
          Add To Cart
        </button>

        {/* <button
      className="remove-btn"
      onClick={() =>
        dispatch({
          type: "odd",
          payload: Number(price),
          payload1: String(name),
        })
      }
    >
      Remove
    </button> */}
      </div>
    </li>
  );
}
