import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useItem } from "../context/item-context";
import { Nav } from "./Nav";
import { useState, useEffect } from "react";
import Empty from "../assets/empty-cart.svg";
import "./cart.css";
import CardView from "./CardView";
import { Footer } from "./footer";
import React from "react";
export default function Cart() {
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
      {quantity > 0 && (
        <h1 className="subtotoal-num"> Subtotal({quantity}) Items</h1>
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
          {total > 0 && (
            <div className="total-item">
              <h3 className="subtotal">Order Summary</h3>
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
