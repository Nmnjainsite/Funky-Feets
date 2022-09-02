import { useFilter } from "../../context/filter-context";
import React from "react";
const FilterBar = () => {
  const { state, dispatchItem } = useFilter();
  const {
    sortBy,
    searchValue,
    discount,
    category,
    itemsInStocks,
    getFastDelivery,
    bestSeller,
    categoryName,
    name,
  } = state;
  const { casual, sneakers, sports, formals, crocs } = categoryName;
  const { Air, Sparx, adidas, Puma, Liberty } = name;
  return (
    <div className="left-bar">
      <span
        style={{ color: "red", cursor: "pointer", fontSize: "0.8rem" }}
        onClick={() => dispatchItem({ type: "CLEAR" })}
      >
        Clear all filters
      </span>
      <p className="nav-heading">Filter </p>
      <div>
        <label style={{ fontSize: "1rem" }}>
          <input
            type="checkbox"
            value="item_stocks"
            onChange={() => dispatchItem({ type: "item_stocks" })}
          />
          Include Out Of Stocks
        </label>
        <div>
          {" "}
          <label style={{ fontSize: "1rem" }}>
            <input
              type="checkbox"
              value="item_delivery"
              onChange={() => dispatchItem({ type: "item_delivery" })}
            />
            Fast Delivery
          </label>
        </div>
        <label style={{ fontSize: "1rem" }}>
          <input
            type="checkbox"
            value="best_seller"
            onChange={() => dispatchItem({ type: "best_seller" })}
          />
          Best Seller
        </label>
      </div>
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
            onChange={() => dispatchItem({ type: "SHOW_ADIDAS" })}
          />
          adidas
        </label>{" "}
        <label>
          <input
            type="checkbox"
            value="air max"
            name="producer"
            onChange={() => dispatchItem({ type: "SHOW_AIR" })}
          />
          Air Max
        </label>
        <label>
          <input
            type="checkbox"
            value="sparx"
            name="producer"
            onChange={() => dispatchItem({ type: "SHOW_SPARX" })}
          />
          Sparx
        </label>
        <label>
          <input
            type="checkbox"
            value="puma"
            name="producer"
            onChange={() => dispatchItem({ type: "SHOW_PUMA" })}
          />
          Puma
        </label>
        <label>
          <input
            type="checkbox"
            value="liberty"
            name="producer"
            onChange={() => dispatchItem({ type: "SHOW_LIBERTY" })}
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
            onChange={() => dispatchItem({ type: "SHOW_CASUAL" })}
          />
          casuals
        </label>
        <label>
          <input
            type="checkbox"
            value="sneakers"
            name="style"
            onChange={() => dispatchItem({ type: "SHOW_SNEAKERS" })}
          />
          sneakers
        </label>
        <label>
          <input
            type="checkbox"
            value="sports"
            name="style"
            onChange={() => dispatchItem({ type: "SHOW_SPORTS" })}
          />
          sports
        </label>
        <label>
          <input
            type="checkbox"
            value="formals"
            name="style"
            onChange={() => dispatchItem({ type: "SHOW_FORMALS" })}
          />
          formal
        </label>
        <label>
          <input
            type="checkbox"
            value="crocs"
            name="style"
            onChange={() => dispatchItem({ type: "SHOW_CROCS" })}
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
