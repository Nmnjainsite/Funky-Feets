import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import Empty from "../assets/empty-cart.svg";
import "./checkout.css";
import { Footer } from "./footer";
import React from "react";
import { useItem } from "../context/item-context";
import { useState, useEffect } from "react";
export default function CheckOut() {
  const [{ item }, dispatch] = useItem();

  const [total, setTotal] = useState(0);
  const [original, setOriginal] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);
  const [quantity, showQuantity] = useState(0);
  useEffect(() => {
    setTotal(
      item.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    setOriginal(
      item.reduce(
        (acc, curr) => acc + Number(curr.original_price) * curr.qty,
        0
      )
    );
    setDiscountValue(
      item.reduce(
        (acc, curr) =>
          acc + Number(curr.original_price - curr.price) * curr.qty,
        0
      )
    );
    showQuantity(item.reduce((acc, curr) => acc + curr.qty, 0));
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
          {total > 0 && (
            <div className="checkout-item">
              <h3 className="order-details">Order Details</h3>
              <div>
                {" "}
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
                  {original}
                </span>
              </p>

              <p>
                <span style={{ float: "left" }}>Discount :</span>
                <span>{discountValue}</span>
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
                  {total}
                </span>
              </p>
              <h4 style={{ color: "brown" }}>
                <span style={{ float: "left" }}>Order Total:</span>
                <BiRupee></BiRupee>
                {total + 99}
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
