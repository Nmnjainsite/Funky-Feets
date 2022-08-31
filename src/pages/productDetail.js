import { useParams, Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { products } from "../backend/db/products";
import { Nav } from "./Nav";
import { Footer } from "./footer";
import "./ProductDetails.css";
import SingleProductCard from "./SingleProductCard";
import React from "react";
function ProductDetails() {
  const { productId } = useParams();
  function getProductDetails(products, productId) {
    return products.find((product) => product._id === productId);
  }

  const data = getProductDetails(products, productId);
  return (
    <>
      <Nav />
      <div>
        <SingleProductCard products={data} />
      </div>

      <Footer />
    </>
  );
}

export { ProductDetails };
