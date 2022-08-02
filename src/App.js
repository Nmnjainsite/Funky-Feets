import "./index.css";
import Home from "./pages/home";
import Products from "./pages/product";
import { Link, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home" >Funky Feet</Link>
        <Link to="/Products">Product</Link>
        </nav>
     
       
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path ="/Products" element={<Products/>} />
      </Routes>

      
    </div>
  );
}



