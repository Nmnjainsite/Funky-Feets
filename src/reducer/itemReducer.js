import React from "react";

function itemReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        item: [...state.item, action.payload1],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        item: state.item.filter((item) => item._id !== action.payload),
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        item: state.item.map((item) =>
          item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        item: state.item.filter((data) =>
          data._id === action.payload
            ? data.qty > 1
              ? (data.qty = data.qty - 1)
              : data.qty
            : data.qty
        ),
      };
    case "GET_PRICE":
      const getPrice = state.item.reduce(
        (acc, curr) => acc + Number(curr.price * curr.qty),
        0
      );
      return { ...state, getPrice: getPrice };

    case "GET_ORIGINAL_PRICE":
      const getOriginalPrice = state.item.reduce(
        (acc, curr) => acc + Number(curr.original_price * curr.qty),
        0
      );
      return { ...state, getOriginalPrice: getOriginalPrice };
    case "GET_DISCOUNT":
      const getDiscount = state.getOriginalPrice - state.getPrice;
      return { ...state, getDiscount: getDiscount };
    default:
      return state;
  }
}

export default itemReducer;
