import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import { ItemProvider } from "./pages/item-context";
import { FilterProvider } from "./pages/filter-context";
import { WishlistProvider } from "./pages/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <WishlistProvider>
        <FilterProvider>
          <ItemProvider>
            <App />
          </ItemProvider>
        </FilterProvider>
      </WishlistProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
