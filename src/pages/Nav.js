import { useFilter } from "./filter-context";
import { useItem } from "./item-context";
import { Wishlist } from "./wishlist";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { useWishlist } from "./wishlist-context";

function Nav() {
  const [{ value }] = useItem();
  const [{ searchValue }, dispatchItem] = useFilter();
  const [{ itemValue }] = useWishlist();
  return (
    <>
      <div className="title-container">
        <Link to="/Products" style={{ color: "#292524", cursor: "pointer" }}>
          <h1 className="title">Funky Feet</h1>
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
          <div className="number">{value}</div>
        </div>
        <div className="badge-icons-2">
          <Link to="/Wishlist" style={{ color: "white" }}>
            <BsFillHeartFill></BsFillHeartFill>
          </Link>
          <div className="number-2">{itemValue} </div>
        </div>
        <div className="right-nav">
          Hi,User
          <Link to="/Login">
            <button className="btn-right">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export { Nav };
