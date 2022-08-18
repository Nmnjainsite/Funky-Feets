import {
  BsXLg,
  BsFillCartFill,
  BsFillHeartFill,
  BsHeart,
  BsRssFill,
  BsStar,
} from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useItem } from "./item-context";
import { Nav } from "./Nav";
import { useWishlist } from "./wishlist-context";
import "./cart.css";

export default function Cart() {
  const [
    { item, value, totalPrice, ogPrice, totalDiscount, orderTotal },
    dispatch,
  ] = useItem();

  const [{ wishlistState }, wishlistDispatch] = useWishlist();
  return (
    <div>
      <Nav />
      <h1 style={{ textAlign: "center" }}>Total Item : {value}</h1>

      <div className="total-item">
        <h3 style={{ textAlign: "center" }}>Order Summary</h3>
        <hr />
        <p>
          <span style={{ float: "left" }}>MRP :</span>
          <span>
            <BiRupee></BiRupee>
            {ogPrice}
          </span>
        </p>
        <p>
          <span style={{ float: "left" }}>Discount :</span>
          <span>
            <BiRupee></BiRupee>
            {totalDiscount}
          </span>
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
            {totalPrice}
          </span>
        </p>

        <h4 style={{ color: "red" }}>
          <span style={{ float: "left" }}>Order Total:</span>
          <BiRupee></BiRupee>
          {totalPrice + 99}
        </h4>
        <hr />
        <div style={{ textAlign: "center" }}>
          <Link to="/Wishlist">
            <button className="order-button">Place Your Order</button>
          </Link>
        </div>
      </div>
      <div className="cart">
        {item.length > 0 &&
          item.map((item) => (
            <ul className="wishlist-container">
              <li className="wishlist-cart ">
                <div className="img-col-1 ">
                  <img
                    src={item.img}
                    className="cart-image"
                    key={item.img}
                  ></img>
                  {/* <span style={{ float: "right" }}>
                 
                    <BsStar></BsStar> {item.rating.rate}/{item.rating.count}
                  </span> */}
                </div>

                <div className="wishlist-cart-typography">
                  <div>
                    <h3 key={item.description}> {item.description}</h3>
                  </div>

                  <div>
                    <h3 style={{ display: "inline" }} key={item.price}>
                      <BiRupee></BiRupee>
                      {item.price}
                    </h3>
                    <span
                      style={{
                        textDecoration: "line-through",
                        margin: "0.3rem",
                      }}
                      key={item.original_price}
                    >
                      {" "}
                      Rs.{item.original_price}
                    </span>
                    <span style={{ color: "green" }} key={item.discount}>
                      ({item.discount}% off)
                    </span>

                    <p style={{ fontWeight: "bold" }} key={item.color}>
                      Colour: {item.color}
                    </p>
                  </div>
                  <p>
                    <span style={{ margin: "0.3rem" }} key={item.qty}>
                      {item.qty}
                    </span>
                    <button>+</button> <button>-</button>
                  </p>
                </div>
              </li>
              <div className="tags">
                <p>
                  <BsHeart
                    onClick={() =>
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: item,
                      })
                    }
                  ></BsHeart>
                </p>
                <span>
                  <BsXLg
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id,
                        payload1: item.price,
                        payload2: item.original_price,
                        payload3: item.original_price - item.price,
                      });
                    }}
                  ></BsXLg>
                </span>
              </div>
            </ul>
          ))}
      </div>
    </div>
  );
}
