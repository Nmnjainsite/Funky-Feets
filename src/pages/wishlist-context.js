import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext(null);
const useWishlist = () => useContext(WishlistContext);

const initialState = {
  itemInWishlist: [],
};

function WishlistProvider({ children }) {
  const [{ wishlistState, itemInWishlist }, wishlistDispatch] = useReducer(
    wishlistFunction,
    initialState
  );

  return (
    <WishlistContext.Provider
      value={[{ wishlistState, itemInWishlist }, wishlistDispatch]}
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
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        itemInWishlist: wishlistState.itemInWishlist.filter(
          (item) => item.id !== wishlistAction.payload
        ),
      };
    case "CLEAR_WISHLIST":
      return {
        itemInWishlist: [],
      };
    default:
      return state;
  }
}

export { useWishlist, WishlistProvider };
