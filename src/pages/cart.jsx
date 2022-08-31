import {
  BsXLg,
  BsFillCartFill,
  BsFillHeartFill,
  BsHeart,
  BsRssFill,
  BsStar,
} from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useItem } from "../context/item-context";
import { Nav } from "./Nav";
import { useState } from "react";
import Empty from "../assets/empty-cart.svg";
import "./cart.css";
import CardView from "./CardView";
import { products } from "../backend/db/products";
import { Footer } from "./footer";
import { ProductDetails } from "./productDetail";
import React from "react";
export default function Cart() {
  const [
    { item, value, totalPrice, ogPrice, totalDiscount, quantity },
    dispatch,
  ] = useItem();

  const [count] = useState(1);
  const qtyValue = (totalPrice) => totalPrice * count;

  const totalValue = qtyValue(totalPrice);
  return (
    <div>
      <Nav />

      {value > 0 && (
        <h1 className="subtotoal-num"> Subtotal({item.length}) Items</h1>
      )}

      <div className="cart-box">
        {item.length > 0 ? (
          <div className="cart">
            {item.map((item) => (
              <CardView products={item} />
            ))}
          </div>
        ) : (
          <img src={Empty} className="empty-cart-image"></img>
        )}

        <div>
          <div>
            {ogPrice > 0 && (
              <div className="total-item">
                <h3 className="subtotal">Order Summary</h3>
                <hr />

                <p>
                  <span style={{ float: "left" }}>MRP :</span>
                  <span>
                    <BiRupee></BiRupee>
                    {ogPrice}
                  </span>
                </p>

                <p>
                  <span style={{ float: "left" }}>Discount :</span>
                  <span>{totalDiscount}</span>
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
                    {totalValue}
                  </span>
                </p>
                <h4 style={{ color: "brown" }}>
                  <span style={{ float: "left" }}>Order Total:</span>
                  <BiRupee></BiRupee>
                  {totalPrice + 99}
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
      </div>
      <Footer />
    </div>
  );
}
