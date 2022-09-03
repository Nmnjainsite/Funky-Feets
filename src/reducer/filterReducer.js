import React from "react";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, searchValue: action.payload };
    case "sort":
      return { ...state, sortBy: action.payload };
    case "DISCOUNT":
      return { ...state, discount: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "item_stocks":
      return { ...state, itemsInStocks: !state.itemsInStocks };
    case "item_delivery":
      return { ...state, getFastDelivery: !state.getFastDelivery };
    case "best_seller":
      return { ...state, bestSeller: !state.bestSeller };
    case "SHOW_AIR":
      return {
        ...state,
        name: {
          ...state["name"],
          Air: !state.name.Air,
        },
      };
    case "SHOW_SPARX":
      return {
        ...state,
        name: {
          ...state["name"],
          Sparx: !state.name.Sparx,
        },
      };
    case "SHOW_PUMA":
      return {
        ...state,
        name: {
          ...state["name"],
          Puma: !state.name.Puma,
        },
      };
    case "SHOW_LIBERTY":
      return {
        ...state,
        name: {
          ...state["name"],
          Liberty: !state.name.Liberty,
        },
      };
    case "SHOW_ADIDAS":
      return {
        ...state,
        name: {
          ...state["name"],
          adidas: !state.name.adidas,
        },
      };
    case "SHOW_CASUAL":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          casual: !state.categoryName.casual,
        },
      };
    case "SHOW_SNEAKERS":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          sneakers: !state.categoryName.sneakers,
        },
      };
    case "SHOW_FORMALS":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          formals: !state.categoryName.formals,
        },
      };
    case "SHOW_SPORTS":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          sports: !state.categoryName.sports,
        },
      };
    case "SHOW_CROCS":
      return {
        ...state,
        categoryName: {
          ...state["categoryName"],
          crocs: !state.categoryName.crocs,
        },
      };
    case "CLEAR":
      return {
        ...state,
        sortby: null,
        category: "",
        itemsInStocks: true,
        getFastDelivery: false,
        bestSeller: false,
        searchValue: null,
        discount: null,
        categoryName: {
          casual: false,
          formal: false,
          sneakers: false,
          crocs: false,
          sports: false,
        },
        name: {
          Air: false,
          Sparx: false,
          Puma: false,
          Liberty: false,
          adidas: false,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
