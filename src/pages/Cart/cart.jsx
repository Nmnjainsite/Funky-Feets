import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useItem } from "../../context/item-context";
import { Nav } from "../Nav/Nav";
import { useState, useEffect } from "react";
import Empty from "../../assets/empty-cart.svg";
import "./cart.css";
import CardView from "./CardView";
import { Footer } from "../footer/footer";
import React from "react";
export default function Cart() {
  const [
    { item, getPrice, getOriginalPrice, getDiscount, getQuantity },
    dispatch,
  ] = useItem();

  const [quantity, showQuantity] = useState();

  useEffect(() => {
    dispatch({ type: "GET_PRICE" });
    dispatch({ type: "GET_ORIGINAL_PRICE" });
    dispatch({ type: "GET_DISCOUNT" });
    showQuantity(item.reduce((acc, curr) => acc + curr.qty, 0));
  }, [item]);
  return (
    <div>
      <Nav />
      {quantity > 0 && (
        <h1 className="subtotoal-num"> Subtotal({quantity})Items</h1>
      )}

      <div className="cart-box">
        {item.length > 0 ? (
          <div className="cart">
            {item.map((item) => (
              <CardView products={item} />
            ))}
          </div>
        ) : (
          <div>
            <img
              src="	https://hsnbazar.com/images/empty-cart.png"
              className="empty-cart-image"
            ></img>
          </div>
        )}

        <div>
          {getPrice > 0 && (
            <div className="total-item">
              <h3 className="subtotal">Order Summary</h3>
              <hr />

              <p>
                <span style={{ float: "left" }}>MRP :</span>
                <span>
                  <BiRupee></BiRupee>
                  {getOriginalPrice}
                </span>
              </p>

              <p>
                <span style={{ float: "left" }}>Discount :</span>
                <span>
                  <BiRupee></BiRupee>
                  {getDiscount}
                </span>
              </p>
              <p>
                <span style={{ float: "left" }}>Delivery :</span>
                <span>
                  <BiRupee></BiRupee>99
                </span>
              </p>
              <p>
                <span style={{ float: "left" }}>Items :</span>
                <span>
                  <BiRupee></BiRupee>
                  {getPrice}
                </span>
              </p>
              <h4 style={{ color: "brown" }}>
                <span style={{ float: "left" }}>Order Total:</span>
                <BiRupee></BiRupee>
                {getPrice + 99}
              </h4>
              <hr />
              <div style={{ textAlign: "center" }}>
                <Link to="/checkout">
                  <button className="order-button">Check Out</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
