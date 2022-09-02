import "./index.css";
import React from "react";
import Home from "./pages/Home/home";
import Products from "./pages/Product/product";
import Cart from "./pages/Cart/cart";
import { Routes, Route } from "react-router-dom";
import { Wishlist } from "./pages/wishlist/wishlist";
import { Login } from "./pages/login/login.jsx";
import { SignUp } from "./pages/signup/signup";
import { ProductCard } from "./pages/Product/ProductCard";
import { ProductDetails } from "./pages/SingleProduct/productDetail";
import { NotFound } from "./pages/Error404/404";
import { RequireAuth } from "./pages/RequireAuth";
import CheckOut from "./pages/checkout/checkout";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ProductDetail/:productId" element={<ProductDetails />} />
        <Route
          path="/Cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/Wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
