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
            checked={!itemsInStocks}
            onChange={() => dispatchItem({ type: "item_stocks" })}
          />
          Include Out Of Stocks
        </label>
        <div>
          {" "}
          <label style={{ fontSize: "1rem" }}>
            <input
              checked={getFastDelivery}
              type="checkbox"
              onChange={() => dispatchItem({ type: "item_delivery" })}
            />
            Fast Delivery
          </label>
        </div>
        <label style={{ fontSize: "1rem" }}>
          <input
            type="checkbox"
            checked={bestSeller}
            onChange={() => dispatchItem({ type: "best_seller" })}
          />
          Best Seller
        </label>
      </div>
      <p className="nav-heading">Categories</p>
      <label>
        <input
          type="radio"
          className="radiobox"
          value="male"
          name="category"
          checked={state.category === "MALE"}
          onChange={() => dispatchItem({ type: "CATEGORY", payload: "MALE" })}
        />
        Men
      </label>
      <label>
        <input
          className="radiobox"
          type="radio"
          value="female"
          name="category"
          checked={state.category === "FEMALE"}
          onChange={() => dispatchItem({ type: "CATEGORY", payload: "FEMALE" })}
        />
        Women
      </label>
      <label>
        <input
          type="radio"
          value="kids"
          name="category"
          checked={state.category === "KIDS"}
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
            checked={adidas}
            onChange={() => dispatchItem({ type: "SHOW_ADIDAS" })}
          />
          adidas
        </label>{" "}
        <label>
          <input
            type="checkbox"
            value="Air"
            name="producer"
            checked={Air}
            onChange={() => dispatchItem({ type: "SHOW_AIR" })}
          />
          Air Max
        </label>
        <label>
          <input
            type="checkbox"
            value="Sparx"
            name="producer"
            checked={Sparx}
            onChange={() => dispatchItem({ type: "SHOW_SPARX" })}
          />
          Sparx
        </label>
        <label>
          <input
            type="checkbox"
            value="Puma"
            name="producer"
            checked={Puma}
            onChange={() => dispatchItem({ type: "SHOW_PUMA" })}
          />
          Puma
        </label>
        <label>
          <input
            type="checkbox"
            value="Liberty"
            name="producer"
            checked={Liberty}
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
            value="casual"
            name="style"
            checked={casual}
            onChange={() => dispatchItem({ type: "SHOW_CASUAL" })}
          />
          casuals
        </label>
        <label>
          <input
            type="checkbox"
            value="sneakers"
            name="style"
            checked={sneakers}
            onChange={() => dispatchItem({ type: "SHOW_SNEAKERS" })}
          />
          sneakers
        </label>
        <label>
          <input
            type="checkbox"
            value="sports"
            name="style"
            checked={sports}
            onChange={() => dispatchItem({ type: "SHOW_SPORTS" })}
          />
          sports
        </label>
        <label>
          <input
            type="checkbox"
            value="formals"
            name="style"
            checked={formals}
            onChange={() => dispatchItem({ type: "SHOW_FORMALS" })}
          />
          formal
        </label>
        <label>
          <input
            type="checkbox"
            value="crocs"
            name="style"
            checked={crocs}
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
            value="10"
            name="discount"
            checked={state.discount === "ABOVE_10"}
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_10" })
            }
          />
          10% And Above
        </label>
        <label>
          <input
            type="radio"
            value="20"
            name="discount"
            checked={state.discount === "ABOVE_20"}
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_20" })
            }
          />
          20% And Above
        </label>
        <label>
          <input
            type="radio"
            value="30"
            name="discount"
            checked={state.discount === "ABOVE_30"}
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_30" })
            }
          />
          30% And Above
        </label>
        <label>
          <input
            type="radio"
            value="40"
            name="discount"
            checked={state.discount === "ABOVE_40"}
            onChange={() =>
              dispatchItem({ type: "DISCOUNT", payload: "ABOVE_40" })
            }
          />
          40% And Above
        </label>
        <label>
          <input
            type="radio"
            value="50"
            name="discount"
            checked={state.discount === "ABOVE_50"}
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
