import React from "react";
import "./product.css";
import { useWishlist } from "./wishlist-context";
import {
  BsFillCartFill,
  BsFillHeartFill,
  BsStar,
  BsHeart,
} from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import "./wishlist.css";
import { useItem } from "./item-context";
function Wishlist() {
  const [{ itemInWishlist }, wishlistDispatch] = useWishlist();
  const [{ item }, dispatch] = useItem();
  return (
    <div className="App">
      <Nav />

      <div className="wishlist-box-container">
        {itemInWishlist &&
          itemInWishlist.map((itemInWishlist) => (
            <li className="wishcard-container">
              <div className="img-box">
                {itemInWishlist.best_seller && (
                  <span className="new-tag">Best Seller</span>
                )}

                <img
                  src={itemInWishlist.img}
                  key={itemInWishlist.img}
                  className="product-img"
                ></img>
                <span className="rating-box" key={itemInWishlist.rating}>
                  <BsStar></BsStar>
                  {itemInWishlist.rating.rate}/{itemInWishlist.rating.count}
                </span>
              </div>
              <div className="product-card-typography">
                <h3 key={itemInWishlist.name}>{itemInWishlist.name}</h3>
                <small
                  style={{ color: "grey", margin: "-2rem" }}
                  key={itemInWishlist.description}
                >
                  {itemInWishlist.description}
                </small>
                <p>
                  <h3
                    style={{
                      display: "inline",
                    }}
                    key={itemInWishlist.price}
                  >
                    <BiRupee></BiRupee> {itemInWishlist.price}
                  </h3>

                  <span
                    style={{
                      textDecoration: "line-through",
                      margin: "0.4rem",
                    }}
                    key={itemInWishlist.original_price}
                  >
                    MRP Rs.
                    {itemInWishlist.original_price}
                  </span>

                  <span
                    key={itemInWishlist.discount}
                    style={{ color: "green" }}
                  >
                    ({itemInWishlist.discount} % off)
                  </span>
                </p>
                <Link to="/Cart">
                  <button
                    className="product-cart-button"
                    onClick={() =>
                      dispatch({
                        type: "even",
                        payload3: Number(
                          itemInWishlist.original_price - itemInWishlist.price
                        ),
                        payload2: Number(itemInWishlist.original_price),
                        payload: Number(itemInWishlist.price),
                        payload1: itemInWishlist,
                      })
                    }
                  >
                    Add To Cart
                    <BsFillCartFill></BsFillCartFill>
                  </button>
                </Link>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}

export { Wishlist };
