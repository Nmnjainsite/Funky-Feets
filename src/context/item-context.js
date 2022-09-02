import { createContext, useContext, useReducer } from "react";
import React from "react";
import itemReducer from "../reducer/itemReducer";
const ItemContext = createContext(null);
const useItem = () => useContext(ItemContext);

const initialState = {
  item: [],
};

function ItemProvider({ children }) {
  const [{ item }, dispatch] = useReducer(itemReducer, initialState);

  return (
    <ItemContext.Provider
      value={[
        {
          item,
        },
        dispatch,
      ]}
    >
      {children}
    </ItemContext.Provider>
  );
}

export { useItem, ItemProvider };
