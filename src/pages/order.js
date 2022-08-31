import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import Empty from "../assets/empty-cart.svg";
import "./cart.css";
import { Footer } from "./footer";
import React from "react";
import { useItem } from "../context/item-context";
import { useState } from "react";
export default function CheckOut() {
  const [
    { item, value, totalPrice, ogPrice, totalDiscount, quantity },
    dispatch,
  ] = useItem();

  const [data, setData] = useState();
  const [fetch, setFetch] = useState();
  function getData() {
    const fetch = data;
    setFetch(data);
  }
  return (
    <div>
      <Nav />
      <div className="cart-box">
        {item.length > 0 || (
          <img
            src={Empty}
            style={{ width: "40vw", marginLeft: "50%", marginTop: "2rem" }}
          ></img>
        )}

        <div
          style={{
            width: "40vw",
            marginLeft: "50%",
            marginTop: "2rem",
          }}
        >
          {ogPrice > 0 && (
            <div className="total-item">
              <h3 className="subtotal">Order Summary</h3>
              <div>
                {" "}
                {item.map((item) => (
                  <li style={{ height: "2vw" }}>
                    <span style={{ float: "left", fontSize: "1rem" }}>
                      {item.name}{" "}
                      <span style={{ color: "grey" }}> @Funky Feet</span>
                    </span>{" "}
                    {item.qty}
                  </li>
                ))}
              </div>
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
                  {totalPrice}
                </span>
              </p>
              <h4 style={{ color: "brown" }}>
                <span style={{ float: "left" }}>Order Total:</span>
                <BiRupee></BiRupee>
                {totalPrice + 99}
              </h4>
              <hr />
              <div>
                <p style={{ textAlign: "center" }}>Delivery Address</p>
                <li>Naman Jain</li>
                <li>Mathur Colony</li>
                <li>Guna</li>
                <hr />
              </div>
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
