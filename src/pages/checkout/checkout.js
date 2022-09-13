import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import Empty from "../../assets/empty-cart.svg";
import "./checkout.css";
import { Footer } from "../footer/footer";
import React from "react";
import { useItem } from "../../context/item-context";
import { useState, useEffect } from "react";
export default function CheckOut() {
  const [
    { item, getPrice, getOriginalPrice, getDiscount, getQuantity },
    dispatch,
  ] = useItem();
  useEffect(() => {
    dispatch({ type: "GET_PRICE" });
    dispatch({ type: "GET_ORIGINAL_PRICE" });
    dispatch({ type: "GET_DISCOUNT" });
  }, [item]);

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

        <div>
          {getPrice > 0 && (
            <div className="checkout-item">
              <h3 className="order-details">Order Details</h3>
              <div>
                {item.map((item) => (
                  <li className="list-of-name">
                    <span style={{ float: "left", fontSize: "1rem" }}>
                      {item.description.slice(-25)}{" "}
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
                  {getOriginalPrice}
                </span>
              </p>

              <p>
                <span style={{ float: "left" }}>Discount :</span>
                <span>{getDiscount}</span>
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
              <div>
                <p style={{ textAlign: "center" }}>Delivery Address</p>
                <li className="delivery-details">Naman Jain</li>
                <li className="delivery-details">Mathur Colony</li>
                <li className="delivery-details">Guna</li>
                <hr />
              </div>
              <div style={{ textAlign: "center" }}>
                <Link to="/checkout">
                  <button className="order-button">Place Your Order</button>
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
