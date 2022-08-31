import React from "react";
import { createContext, useReducer, useContext } from "react";

const FilterContext = createContext();

const initialState = {
  name: null,
  MALE: true,
  FEMALE: true,
  KIDS: true,
  sortBy: null,
  searchValue: null,
  discount: null,
  categoryName: null,
  category: null,
  itemsInStocks: true,
  getFastDelivery: false,
  bestSeller: false,
};
const FilterProvider = ({ children }) => {
  const [
    {
      state,
      name,
      MALE,
      FEMALE,
      KIDS,
      sortBy,
      searchValue,
      discount,
      categoryName,
      category,
      getFastDelivery,
      itemsInStocks,
      bestSeller,
    },
    dispatchItem,
  ] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider
      value={[
        {
          state,
          name,
          MALE,
          FEMALE,
          KIDS,
          sortBy,
          searchValue,
          discount,
          categoryName,
          category,
          getFastDelivery,
          itemsInStocks,
          bestSeller,
        },
        dispatchItem,
      ]}
    >
      {children}
    </FilterContext.Provider>
  );
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, searchValue: action.payload };
    case "sort":
      return { ...state, sortBy: action.payload };
    case "DISCOUNT":
      return { ...state, discount: action.payload };
    case "CATEGORYNAME":
      return { ...state, categoryName: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "NAME":
      return { ...state, name: action.payload };
    case "item_stocks":
      return { ...state, itemsInStocks: !state.itemsInStocks };
    case "item_delivery":
      return { ...state, getFastDelivery: !state.getFastDelivery };
    case "best_seller":
      return { ...state, bestSeller: !state.bestSeller };
    // case "get_categories":
    //   return { ...state, getCategories: !state.getCategories };
    // case "get_sneakers":
    //   return { ...state, getSneakers: !state.getSneakers };
    // case "SHOES":
    //   return { ...state, ADIDAS: !state.ADIDAS };
    // case "Puma":
    //   return { ...state, PUMA: !state.PUMA };
    // case "Sparx":
    //   return { ...state, SPARX: !state.SPARX };
    // case "Liberty":
    //   return { ...state, LIBERTY: !state.LIBERTY };
    // case "MAX":
    //   return { ...state, AIR: !state.AIR };
    case "CLEAR":
      return {
        name: null,
        MALE: true,
        FEMALE: true,
        KIDS: true,
        sortBy: null,
        searchValue: null,
        discount: null,
        categoryName: null,
        category: null,
        itemsInStocks: true,
        getFastDelivery: false,
        bestSeller: false,
      };
    default:
      return state;
  }
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
