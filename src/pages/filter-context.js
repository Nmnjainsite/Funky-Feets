import React from "react";
import { createContext, useReducer, useContext } from "react";

const FilterContext = createContext();

const initialState = {
  ADIDAS: true,
  PUMA: true,
  SPARX: true,
  AIR: true,
  LIBERTY: true,
  MALE: true,
  FEMALE: true,
  KIDS: true,
  sortBy: null,
  searchValue: null,
  discount: null,
  categoryName: null,
  category: null,
};
const FilterProvider = ({ children }) => {
  const [
    {
      state,
      ADIDAS,
      PUMA,
      SPARX,
      AIR,
      LIBERTY,
      MALE,
      FEMALE,
      KIDS,
      sortBy,
      searchValue,
      discount,
      categoryName,
      category,
    },
    dispatchItem,
  ] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider
      value={[
        {
          state,
          ADIDAS,
          PUMA,
          SPARX,
          AIR,
          LIBERTY,
          MALE,
          FEMALE,
          KIDS,
          sortBy,
          searchValue,
          discount,
          categoryName,
          category,
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
    case "SHOES":
      return { ...state, ADIDAS: !state.ADIDAS };
    case "Puma":
      return { ...state, PUMA: !state.PUMA };
    case "Sparx":
      return { ...state, SPARX: !state.SPARX };
    case "Liberty":
      return { ...state, LIBERTY: !state.LIBERTY };
    case "MAX":
      return { ...state, AIR: !state.AIR };

    default:
      return state;
  }
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
