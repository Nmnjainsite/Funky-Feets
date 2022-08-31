import { useFilter } from "../context/filter-context";
import React from "react";
const SortBar = () => {
  const [state, dispatchItem] = useFilter();
  return (
    <div>
      <select
        name="PRICE"
        className="price-filter"
        onChange={(e) =>
          dispatchItem({ type: "sort", payload: e.target.value })
        }
      >
        <option checked value="DEFAULT">
          Sort Items
        </option>
        <option checked value="high-price">
          Price:High To Low
        </option>
        <option value="low-price">Price: Low To High</option>
        <option value="high-rating">Rating:High To Low</option>
        <option value="low-rating">Rating: Low To High</option>
      </select>
    </div>
  );
};

export { SortBar };
