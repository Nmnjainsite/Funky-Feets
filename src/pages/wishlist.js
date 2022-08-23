import React from "react";
import "./product.css";
import { useWishlist } from "../context/wishlist-context";
import {
  BsFillCartFill,
  BsFillHeartFill,
  BsStar,
  BsHeart,
  BsX,
} from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Nav } from "./Nav";
import "./wishlist.css";
import { useItem } from "../context/item-context";
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
              <BsX
                className="card-wishlist-emoji"
                onClick={() => {
                  wishlistDispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: itemInWishlist.id,
                  });
                }}
              />
              <div className="img-box">
                {itemInWishlist.best_seller && (
                  <span className="new-tag">Best Seller</span>
                )}

                <img
                  src={itemInWishlist.img}
                  key={itemInWishlist.img}
                  className="wish-img"
                ></img>
                <span className="rating-box" key={itemInWishlist.rating}>
                  <BsStar></BsStar>
                  {itemInWishlist.rating.rate}/{itemInWishlist.rating.count}
                </span>
              </div>
              <div className="wish-card-typography">
                <h3 style={{ textAlign: "left" }} key={itemInWishlist.name}>
                  {itemInWishlist.name}
                </h3>
                <div
                  style={{ color: "#374151", marginTop: "-0.8rem" }}
                  key={itemInWishlist.description}
                >
                  {itemInWishlist.description}
                </div>
                <p>
                  <h3
                    style={{ marginTop: "-0.5rem" }}
                    className="product-price"
                    key={itemInWishlist.price}
                  >
                    <BiRupee></BiRupee> {itemInWishlist.price}
                  </h3>

                  <span
                    className="wishlist-original-price"
                    key={itemInWishlist.original_price}
                  >
                    Rs.
                    {itemInWishlist.original_price}
                  </span>

                  <span
                    key={itemInWishlist.discount}
                    style={{ color: "green" }}
                  >
                    ({itemInWishlist.discount} % off)
                  </span>
                </p>

                <button
                  className="wishlist-cart-button"
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
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}

export { Wishlist };
