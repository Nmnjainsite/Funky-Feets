import { useFilter } from "./filter-context";
import { useItem } from "./item-context";

const FilterBar = () => {
  const [{ value }, dispatch] = useItem();
  const [
    {
      ADIDAS,
      PUMA,
      SPARX,
      AIR,
      LIBERTY,
      sortBy,
      searchValue,
      discount,
      categoryName,
      category,
    },
    dispatchItem,
  ] = useFilter();

  return (
    <div className="left-bar">
      <span
        style={{ color: "grey", cursor: "pointer", fontSize: "0.8rem" }}
        onClick={() => dispatchItem({ type: "CLEAR" })}
      >
        Remove all filters
      </span>
      <p className="nav-heading">Filter </p>
      <p className="nav-heading">Rating</p>
      <input
        type="range"
        min="1"
        max="50"
        value="50"
        onChange={(e) => dispatchItem({ type: "sort", payload: "high-rating" })}
      ></input>
      <p className="nav-heading">Categories</p>
      <label>
        <input
          type="radio"
          value="male"
          name="categories"
          onChange={() => dispatchItem({ type: "CATEGORY", payload: "MALE" })}
        />
        Men
      </label>
      <label>
        <input
          type="radio"
          value="female"
          name="categories"
          onChange={() => dispatchItem({ type: "CATEGORY", payload: "FEMALE" })}
        />
        Women
      </label>
      <label>
        <input
          type="radio"
          value="kids"
          name="categories"
          onChange={() => dispatchItem({ type: "CATEGORY", payload: "KIDS" })}
        />
        Kids
      </label>
      <hr style={{ width: "100%" }} />
      <div className="filter-nav">
        <p className="nav-heading">Producer</p>
        <label>
          <input
            type="checkbox"
            value="adidas"
            name="producer"
            onChange={() => dispatchItem({ type: "SHOES" })}
          />
          adidas
        </label>{" "}
        <label>
          <input
            type="checkbox"
            value="air max"
            name="producer"
            onChange={() => dispatchItem({ type: "MAX" })}
          />
          Air Max
        </label>
        <label>
          <input
            type="checkbox"
            value="sparx"
            name="producer"
            onChange={() => dispatchItem({ type: "Sparx" })}
          />
          Sparx
        </label>
        <label>
          <input
            type="checkbox"
            value="puma"
            name="producer"
            onChange={() => dispatchItem({ type: "Puma" })}
          />
          Puma
        </label>
        <label>
          <input
            type="checkbox"
            value="liberty"
            name="producer"
            onChange={() => dispatchItem({ type: "Liberty" })}
          />
          Liberty
        </label>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="filter-nav">
        <p className="nav-heading">Style</p>
        <label>
          <input
            type="checkbox"
            value="casuals"
            name="style"
            onChange={() =>
              dispatchItem({ type: "CATEGORYNAME", payload: "CASUALS" })
            }
          />
          casuals
        </label>
        <label>
          <input
            type="checkbox"
            value="sneakers"
            name="style"
            onChange={() =>
              dispatchItem({ type: "CATEGORYNAME", payload: "SNEAKERS" })
            }
          />
          sneakers
        </label>
        <label>
          <input
            type="checkbox"
            value="sports"
            name="style"
            onChange={() =>
              dispatchItem({ type: "CATEGORYNAME", payload: "SPORTS" })
            }
          />
          sports
        </label>
        <label>
          <input
            type="checkbox"
            value="formals"
            name="style"
            onChange={() =>
              dispatchItem({ type: "CATEGORYNAME", payload: "FORMALS" })
            }
          />
          formal
        </label>
        <label>
          <input
            type="checkbox"
            value="crocs"
            name="style"
            onChange={() =>
              dispatchItem({ type: "CATEGORYNAME", payload: "CROCS" })
            }
          />
          Crocs
        </label>
      </div>
      <hr style={{ width: "100%" }} />
      <div className="filter-nav">
        <p className="nav-heading">Discount</p>
        <label>
          <input
            type="radio"
            value="10%"
            name="discount"
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_10" })
            }
          />
          10% And Above
        </label>
        <label>
          <input
            type="radio"
            value="20%"
            name="discount"
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_20" })
            }
          />
          20% And Above
        </label>
        <label>
          <input
            type="radio"
            value="30%"
            name="discount"
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_30" })
            }
          />
          30% And Above
        </label>
        <label>
          <input
            type="radio"
            value="40%"
            name="discount"
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_40" })
            }
          />
          40% And Above
        </label>
        <label>
          <input
            type="radio"
            value="50%"
            name="discount"
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_50" })
            }
          />
          50% And Above
        </label>
      </div>
    </div>
  );
};

export { FilterBar };
