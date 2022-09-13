import { createContext, useContext, useReducer } from "react";
import React from "react";
import itemReducer from "../reducer/itemReducer";
const ItemContext = createContext(null);
const useItem = () => useContext(ItemContext);

const initialState = {
  item: [],
  getPrice: null,
  getOriginalPrice: null,
  getDiscount: null,
};

function ItemProvider({ children }) {
  const [{ state, item, getPrice, getOriginalPrice, getDiscount }, dispatch] =
    useReducer(itemReducer, initialState);

  return (
    <ItemContext.Provider
      value={[
        { state, item, getPrice, getOriginalPrice, getDiscount },
        dispatch,
      ]}
    >
      {children}
    </ItemContext.Provider>
  );
}

export { useItem, ItemProvider };
