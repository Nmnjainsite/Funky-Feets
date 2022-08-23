import React from "react";
import "./home.css";
import women from "../assets/women.jpg";
import img2 from "../assets/img2.jpg";
import red from "../assets/red.jpg";
import air from "../assets/air.jpg";
import puma from "../assets/puma.jpg";
import shoes from "../assets/shoes.jpg";
import crocs from "../assets/crocs.jpg";
import crocsMen from "../assets/crocs-men.jpg";
import adidas from "../assets/adidas.jpg";
import sneakers from "../assets/sneakers.jpg";
import sports from "../assets/sports.jpg";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Footer } from "./footer";
import { Nav } from "./Nav";
export default function Home() {
  return (
    <div className="App">
      {/*-------------header-------------- */}

      <Nav />

      {/* --------typography------------- */}
      <div className="description-container">
        <div className="description">
          <h4>
            Casual shoes for the Friday look you need this season - "To impress
            others you need big brands, to express a good pair is enough"
          </h4>
          <Link to="/Products">
            <button id="btn">Shop Now</button>
          </Link>
        </div>
        <div className="image-handler">
          <img src={red} className="img-2"></img>
          <img src={img2} className="img"></img>
        </div>
      </div>

      {/* ---------------------crocs cards---------------- */}
      <div className="grid-cards">
        <div className="horizontal-card">
          <img src={crocs} className="horizontal-img"></img>
          <h2 className="card-typography"> Graceful and Charming</h2>
          <p className="card-typography">
            Multiply the grace and charm you possess with footwear for her that
            enhances your style to the core. "Give a girl the right shoes and
            she can conqure the world"
          </p>
          <button className="card-btn">Shop Women Casuals</button>
        </div>

        <div className="crocs-card">
          <img src={crocsMen} className="crocs-img"></img>
          <h2 className="card-typography">Time to be LAZY! </h2>

          <p className="card-typography">
            Crocs: The Only Way to Combat Sand in Your Shoes Is to Wear Crocs.
            Prefect for the lazy summer afternoons.
          </p>
          <button className="crocs-btn">Shop Men Casuals</button>
        </div>
      </div>
      {/* --------------------responsive images----------------- */}

      <div className="full-screen-card">
        <img src={air} className="full-screen-img"></img>
        <h1 className="full-screen-typo">The "EVERY DAY" Casuals</h1>
        <p style={{ textAlign: "center" }}>
          Feeling bold? Complete that look. Our "Every Day" casuals are designed
          to complete any look this season.
        </p>
      </div>

      <div className="offer-img">
        <img
          src="https://img.freepik.com/premium-psd/banner-sport-s…facebook-web-banner-template_70055-853.jpg?w=2000"
          className="offer-template"
        ></img>
      </div>

      {/* ----------------add to cart cards------------------------- */}
      <h1 style={{ textAlign: "center" }}>Trending Items</h1>
      <div className="trending-items">
        <div className="formal-shoes">
          <img src={women} className="trending-pics"></img>
          <p className="brand-name">Lee Cooper</p>
          <button className="add-to-cart">Add To Cart</button>
        </div>

        <div className="adidas-shoes">
          <img src={adidas} className="trending-pics"></img>
          <p className="brand-name">adidas</p>
          <button className="add-to-cart">Add To Cart</button>
        </div>

        <div className="sports-shoes">
          <img src={sports} className="trending-pics"></img>
          <p className="brand-name">Puma</p>
          <button className="add-to-cart">Add To Cart</button>
        </div>
        <div className="sneakers-shoes">
          <img src={sneakers} className="trending-pics"></img>
          <p className="brand-name">Nike</p>

          <button className="add-to-cart">Add To Cart</button>
        </div>

        <div className="sneakers-shoes">
          <img src={puma} className="trending-pics"></img>
          <p className="brand-name">Puma</p>
          <button className="add-to-cart">Add To Cart</button>
        </div>

        <div className="sneakers-shoes">
          <img src={shoes} className="trending-pics"></img>
          <p className="brand-name">Liberty</p>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </div>

      {/* ------------------------footer------------------------- */}
      <Footer />
    </div>
  );
}
