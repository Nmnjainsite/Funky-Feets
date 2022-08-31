import React from "react";
import { useWishlist } from "../context/wishlist-context";
import { Footer } from "./footer";
import { Nav } from "./Nav";
import Empty from "../assets/empty-cart.svg";
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
          <img src={Empty} style={{ width: "40vw", marginLeft: "50%" }}></img>
        )}
      </div>

      <Footer />
    </div>
  );
}

export { Wishlist };
