import { useFilter } from "../context/filter-context";
import { useItem } from "../context/item-context";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { useWishlist } from "../context/wishlist-context";
import { useAuth } from "../context/auth-context";
import React from "react";
function Nav() {
  const [{ item }] = useItem();
  const [{ searchValue }, dispatchItem] = useFilter();
  const { wishlistState } = useWishlist();
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className="title-container">
        <Link to="/Products" style={{ color: "black", cursor: "pointer" }}>
          <h1 className="title">Funky Feet</h1>
          <img
            src="https://i.pinimg.com/originals/a5/3c/59/a53c5901712da82a3f52618f14ab2756.jpg"
            className="product-logo"
          ></img>
        </Link>
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
          <div className="number">{item.length}</div>
        </div>
        <div className="badge-icons-2">
          <Link to="/Wishlist" style={{ color: "white" }}>
            <BsFillHeartFill></BsFillHeartFill>
          </Link>
          <div className="number-2">{wishlistState.itemInWishlist.length}</div>
        </div>
        <div className="right-nav">
          Hi,User
          <Link to="/Login">
            <button className="btn-right">
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export { Nav };
