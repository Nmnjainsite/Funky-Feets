import "./index.css";
import Home from "./pages/home";
import Products from "./pages/product";
import Cart from "./pages/cart";
import { Link, Routes, Route } from "react-router-dom";
import { Wishlist } from "./pages/wishlist";
import { Login } from "./pages/login.jsx";
import { ProductCard } from "./pages/ProductCard";
import { SignUp } from "./pages/signup";

export default function App() {
  <ProductCard />;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}
