import React from "react";

function wishlistReducer(wishlistState, wishlistAction) {
  switch (wishlistAction.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        itemInWishlist: [
          ...wishlistState.itemInWishlist,
          wishlistAction.payload,
        ],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        itemInWishlist: wishlistState.itemInWishlist.filter(
          (item) => item._id !== wishlistAction.payload
        ),
      };
    case "CLEAR_WISHLIST":
      return {
        itemInWishlist: [],
      };
    default:
      return wishlistState;
  }
}

export default wishlistReducer;
