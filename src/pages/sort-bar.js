import { useFilter } from "./filter-context";

const SortBar = () => {
  const [{ sortBy }, dispatchItem] = useFilter();
  return (
    <select
      className="price-filter"
      onChange={(e) => dispatchItem({ type: "sort", payload: e.target.value })}
    >
      <option checked value="default">
        Default
      </option>
      <option value="high-price">Price:High To Low</option>
      <option value="low-price">Price: Low To High</option>
      <option value="high-rating">Rating:High To Low</option>
      <option value="low-rating">Rating: Low To High</option>
    </select>
  );
};

export { SortBar };
