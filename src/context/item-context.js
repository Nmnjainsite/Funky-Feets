import { createContext, useContext, useReducer } from "react";
import React from "react";
const ItemContext = createContext(null);
const useItem = () => useContext(ItemContext);

const initialState = {
  value: 0,
  totalPrice: 0,
  item: [],
  quantity: 1,
  itemPrice: 0,
  ogPrice: 0,
  totalDiscount: 0,
};

function ItemProvider({ children }) {
  const [
    { value, totalPrice, item, quantity, itemPrice, ogPrice, totalDiscount },
    dispatch,
  ] = useReducer(itemFunction, initialState);

  return (
    <ItemContext.Provider
      value={[
        {
          value,
          item,
          totalPrice,
          quantity,
          itemPrice,
          ogPrice,
          totalDiscount,
        },
        dispatch,
      ]}
    >
      {children}
    </ItemContext.Provider>
  );
}

function itemFunction(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        item: [...state.item, action.payload1],
        value: state.value + 1,
        totalPrice: state.totalPrice + action.payload,
        ogPrice: state.ogPrice + action.payload2,
        totalDiscount: state.totalDiscount + action.payload3,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        item: state.item.filter((item) => item._id !== action.payload),
        value: state.value - 1,
        totalPrice: state.totalPrice - action.payload1,
        ogPrice: state.ogPrice - action.payload2,
        totalDiscount: state.totalDiscount - action.payload3,
      };
    // case "INCRE_QTY":
    //   return {
    //     ...state,
    //    item :
    //   };
    case "CLEAR":
      return {
        item: [],
        value: 0,
      };
    default:
      return state;
  }
}

export { useItem, ItemProvider };
