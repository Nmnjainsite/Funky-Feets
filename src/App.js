import "./index.css";
import Home from "./pages/home";
import Products from "./pages/product";
import Cart from "./pages/cart";
import { Routes, Route } from "react-router-dom";
import { Wishlist } from "./pages/wishlist";
import { Login } from "./pages/login.jsx";
import { SignUp } from "./pages/signup";
import { ProductCard } from "./pages/ProductCard";
import { ProductDetails } from "./pages/productDetail";
import { NotFound } from "./pages/404";
import { RequireAuth } from "./pages/RequireAuth";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
