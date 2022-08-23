import { useWishlist } from "../context/wishlist-context";
import { findArray } from "../utils/find";
import { useNavigate } from "react-router-dom";
import { BsCart, BsStar, BsX } from "react-icons/bs";

const WishlistCardView = ({ products }) => {
  const {
    _id,
    name,
    description,
    price,
    category,
    categoryName,
    qty,

    original_price,
    discount,
    img,
    rating,
  } = products;
  const { wishlistState, wishlistDispatch } = useWishlist();

  const navigate = useNavigate();

  const isInCart = findArray(_id, wishlistState.itemsInWishlist);
  const cartHandler = (products) => {
    if (isInCart) {
      navigate("/Cart");
    } else {
      dispatch({
        type: "even",
        payload: products,
      });
    }
  };

  return (
    <div key={_id}>
      <div>
        <img src={img} key={img} style={{ width: "3rem" }} />
        <BsX
          key={BsX}
          className="card__icon"
          size="3rem"
          onClick={() => {
            wishlistDispatch({
              type: "REMOVE_FROM_WISHLIST",
              payload: _id,
            });
          }}
        />
        {/* {new_arrival && (
          <div>
            <div className="">NEW</div>
          </div>
        )} */}
        {/* <div>
          <BsStar /> {rate}|{count}
        </div> */}
      </div>

      <div>
        <div key={name}>{name}</div>
        <div key={description}>{description}</div>

        <div>
          <div key={price}> Rs.{price}</div>
          <div key={original_price}> Rs.{original_price} </div>
          <div key={discount}> ({discount}% OFF) </div>
        </div>
      </div>
      <div>
        <button onClick={() => cartHandler(products)}>
          {isInCart ? "Go To Cart" : "Move to Cart"}
          <BsCart size="2rem" />
        </button>
      </div>
    </div>
  );
};

export { WishlistCardView };
