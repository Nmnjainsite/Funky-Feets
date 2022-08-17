import "./index.css";
import Home from "./pages/home";
import Products from "./pages/product";
import Cart from "./pages/cart";
import { Link, Routes, Route } from "react-router-dom";
import { Wishlist } from "./pages/wishlist";
import { Login } from "./pages/login";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Funky-Feet" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}
