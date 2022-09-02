import React from "react";
import { createContext, useReducer, useContext } from "react";
import filterReducer from "../reducer/filterReducer";
const FilterContext = createContext();

const initialState = {
  name: {
    Air: false,
    Sparx: false,
    Puma: false,
    Liberty: false,
    adidas: false,
  },
  sortBy: null,
  searchValue: null,
  discount: null,
  categoryName: {
    casual: false,
    sneakers: false,
    sports: false,
    formals: false,
    crocs: false,
  },
  category: null,
  itemsInStocks: true,
  getFastDelivery: false,
  bestSeller: false,
};
const FilterProvider = ({ children }) => {
  const [state, dispatchItem] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatchItem }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
