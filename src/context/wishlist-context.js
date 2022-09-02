import { createContext, useContext, useReducer } from "react";
import React from "react";
import wishlistReducer from "../reducer/wishlistReducer";
const WishlistContext = createContext(null);
const useWishlist = () => useContext(WishlistContext);

const initialState = {
  itemInWishlist: [],
};

function WishlistProvider({ children }) {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export { useWishlist, WishlistProvider };
