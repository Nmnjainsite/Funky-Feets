import { useItem } from "../../context/item-context";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./product.css";
import { findArray } from "../../utils/find";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/auth-context";

function ProductCard({ products }) {
  const {
    _id,
    name,
    description,
    price,
    original_price,
    fast_delivery,
    in_stocks,
    discount,
  } = products;
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
      navigate("/login");
      toast.error("Please Login First", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <li className="card-container" style={{ listStyle: "none" }}>
      <div className="product-card-typography">
        <h3 key={name} className="product-name">
          {name}
        </h3>

        <div style={{ color: "#374151", marginTop: "-0.8rem", width: "100%" }}>
          {description.slice(-25)}
        </div>

        <ToastContainer />
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

        {isInCart ? (
          <button
            className="product-cart-button"
            onClick={() => navigate("/Cart")}
          >
            Go To Cart
          </button>
        ) : (
          <button
            onClick={() => cartHandler(_id, products)}
            disabled={!in_stocks}
            className="product-cart-button"
          >
            {!in_stocks ? "Out Of Stock" : "Add To Cart"}
          </button>
        )}
      </div>
    </li>
  );
}
export { ProductCard };
