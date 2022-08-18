import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext(null);
const useWishlist = () => useContext(WishlistContext);

const initialState = {
  itemInWishlist: [],
  itemValue: 0,
};

function WishlistProvider({ children }) {
  const [{ wishlistState, itemInWishlist, itemValue }, wishlistDispatch] =
    useReducer(wishlistFunction, initialState);

  return (
    <WishlistContext.Provider
      value={[{ wishlistState, itemValue, itemInWishlist }, wishlistDispatch]}
    >
      {children}
    </WishlistContext.Provider>
  );
}

function wishlistFunction(wishlistState, wishlistAction) {
  switch (wishlistAction.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        itemInWishlist: [
          ...wishlistState.itemInWishlist,
          wishlistAction.payload,
        ],
        itemValue: wishlistState.itemValue + 1,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        itemInWishlist: wishlistState.itemInWishlist.filter(
          (item) => item.id !== wishlistAction.payload
        ),
        itemValue: wishlistState.itemInValue - 1,
      };
    case "CLEAR_WISHLIST":
      return {
        itemInWishlist: [],
        itemValue: 0,
      };
    default:
      return state;
  }
}

export { useWishlist, WishlistProvider };
