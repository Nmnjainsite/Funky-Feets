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
        item: state.item.filter((data) =>
          data._id === action.payload ? (data.qty = data.qty + 1) : data.qty
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
    case "CLEAR":
      return {
        item: [],
        value: 0,
      };
    default:
      return state;
  }
}

export default itemReducer;
