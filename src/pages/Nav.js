import { useFilter } from "./filter-context";
import { useItem } from "./item-context";
import { Wishlist } from "./wishlist";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

function Nav() {
  const [{ value }] = useItem();
  const [{ searchValue }, dispatchItem] = useFilter();

  return (
    <>
      <div className="title-container">
        <h1 className="title">Funky Feet</h1>
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
          <Link to="/Wishlist">
            <BsFillHeartFill></BsFillHeartFill>
          </Link>
          <div className="number-2">0</div>
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
