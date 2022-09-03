import React from "react";
import { useWishlist } from "../../context/wishlist-context";
import { Footer } from "../footer/footer";
import { Nav } from "../Nav/Nav";
import Empty from "../../assets/empty-cart.svg";
import WishlistCardView from "./wishlistCard";

function Wishlist() {
  const {
    wishlistState: { itemInWishlist },
  } = useWishlist();

  return (
    <div className="App">
      <Nav />
      <div className="wishlist-box-container">
        {itemInWishlist.length > 0 ? (
          itemInWishlist.map((itemInWishlist) => (
            <WishlistCardView products={itemInWishlist} />
          ))
        ) : (
          <img
            src="	https://i.pinimg.com/originals/ff/7c/54/ff7c54add0b356712274ae8d1fab4016.png"
            className="empty-img-wishlist"
          ></img>
        )}
      </div>

      <Footer />
    </div>
  );
}

export { Wishlist };
