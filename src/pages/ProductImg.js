import {
  BsFillCartFill,
  BsFillHeartFill,
  BsStar,
  BsHeart,
  BsHammer,
} from "react-icons/bs";
import { useWishlist } from "./wishlist-context";
import { Link } from "react-router-dom";
function ProductImg({
  best_seller,
  rating,
  img,
  _id,
  name,
  price,
  description,
  discount,
  original_price,
  qty,
  color,
  noDetail,
}) {
  const [{ itemsInWishlist, itemValue }, wishlistDispatch] = useWishlist();
  return (
    <>
      <li className="card-container" style={{ listStyle: "none" }}>
        {!noDetail && <img src={img} key={img} className="product-img"></img>}
        {noDetail && (
          <div className="img-box">
            {best_seller && <span className="new-tag">Best Seller</span>}
            <BsFillHeartFill
              className="card-wishlist-emoji"
              onClick={() =>
                wishlistDispatch({
                  type: "ADD_TO_WISHLIST",

                  payload: {
                    id: _id,
                    name: name,
                    price: Number(price),
                    description: description,
                    best_seller: best_seller,
                    discount: discount,
                    original_price: original_price,
                    rating: rating,
                    img: img,
                    qty: Number(qty),
                    color: color,
                  },
                })
              }
            />
            <Link to={`/ProductDetail/${_id}`}>
              <img src={img} key={img} className="product-img"></img>
            </Link>
            <span className="rating-box">
              <BsStar></BsStar>
              {rating.rate}/{rating.count}
            </span>
          </div>
        )}
      </li>
    </>
  );
}

export { ProductImg };
