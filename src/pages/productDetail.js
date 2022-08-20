import { useParams, Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { products } from "../backend/db/products";
import { Nav } from "./Nav";
import { Footer } from "./footer";
import { ProductImg } from "./ProductImg";
import "./ProductDetails.css";
function ProductDetails() {
  const { productId } = useParams();
  function getProductDetails(products, productId) {
    return products.find((product) => product._id === productId);
  }

  const data = getProductDetails(products, productId);
  return (
    <>
      <Nav />
      <div className="productDetails-container">
        <div className="productDetails-img">
          <ProductImg {...data} />
        </div>
        <div className="productDetails-typo">
          <ProductCard {...data} />
          <Link to="/Products" className="see-all-button">
            See All
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export { ProductDetails };
