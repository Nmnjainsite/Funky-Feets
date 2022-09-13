import { useFilter } from "../../context/filter-context";
import { useItem } from "../../context/item-context";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { useWishlist } from "../../context/wishlist-context";
import { useAuth } from "../../context/auth-context";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Nav() {
  const [{ item, getQuantity }] = useItem();
  const { state, dispatchItem } = useFilter();
  const navigate = useNavigate();
  const {
    sortBy,
    searchValue,
    discount,
    category,
    itemsInStocks,
    getFastDelivery,
    bestSeller,
    categoryName,
    name,
  } = state;
  const { casual, sneakers, sports, formals, crocs } = categoryName;
  const { Air, Sparx, adidas, Puma, Liberty } = name;
  const { wishlistState } = useWishlist();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [quantity, showQuantity] = useState();
  useEffect(() => {
    showQuantity(item.reduce((acc, curr) => acc + curr.qty, 0));
  }, [item]);
  return (
    <>
      <div className="title-container">
        <div className="app-title">
          <img
            src="https://i.pinimg.com/originals/a5/3c/59/a53c5901712da82a3f52618f14ab2756.jpg"
            className="product-logo"
          ></img>
          <Link
            to="/"
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <h1 className="title">Funky Feet</h1>
          </Link>
        </div>
        <input
          className="input"
          placeholder="search your category or brand"
          onChange={(e) =>
            dispatchItem({ type: "SEARCH", payload: e.target.value })
          }
        ></input>
        <div className="badge-icons">
          <Link to="/Cart" style={{ color: "white" }}>
            <BsFillCartFill></BsFillCartFill>
          </Link>
          <div className="number">{quantity}</div>
        </div>
        <div className="badge-icons-2">
          <Link to="/Wishlist" style={{ color: "white" }}>
            <BsFillHeartFill></BsFillHeartFill>
          </Link>
          <div className="number-2">{wishlistState.itemInWishlist.length}</div>
        </div>
        <div className="right-nav">
          <span className="userName">Hi,User</span>

          <button
            className="btn-right"
            onClick={() => {
              if (isLoggedIn) {
                toast.error("Logout Successfully", {
                  position: "top-center",
                  autoClose: 1000,
                });
                navigate("/");
                setIsLoggedIn((login) => !isLoggedIn);
              } else {
                navigate("/login");
              }
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export { Nav };
