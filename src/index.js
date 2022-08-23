import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import { ItemProvider } from "./context/item-context";
import { FilterProvider } from "./context/filter-context";
import { WishlistProvider } from "./context/wishlist-context";
import { AuthProvider } from "./context/auth-context";
// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <WishlistProvider>
          <FilterProvider>
            <ItemProvider>
              <App />
            </ItemProvider>
          </FilterProvider>
        </WishlistProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
