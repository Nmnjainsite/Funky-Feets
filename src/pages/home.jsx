import React from "react";
import "./home.css";
import women from "./women.jpg";
import img2 from "./img2.jpg";
import red from "./red.jpg";
import air from "./air.jpg";
import puma from "./puma.jpg";
import shoes from "./shoes.jpg";
import crocs from "./crocs.jpg";
import crocsMen from "./crocs-men.jpg";
import adidas from "./adidas.jpg";
import sneakers from "./sneakers.jpg";
import sports from "./sports.jpg";
import {
  BsFillCartFill,
  BsFillHeartFill,
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      {/*-------------header-------------- */}

      <div className="title-container">
        <h1 className="title">Funky Feet</h1>

        <input
          className="input"
          placeholder="serach your category or brand"
        ></input>

        <div className="badge-icons">
          <BsFillCartFill></BsFillCartFill>
          <div className="number">0</div>
        </div>
        <div className="badge-icons-2">
          <BsFillHeartFill></BsFillHeartFill>
          <div className="number-2">0</div>
        </div>

        <div className="right-nav">
          Hi,User
          <button className="btn-right">Login</button>
        </div>
      </div>

      {/* --------typography------------- */}
      <div className="description-container">
        <h4 className="description">
          Casual shoes for the Friday look you need this season - "To impress
          others you need big brands, to express a good pair is enough"
        </h4>

        <Link to="/Products">
          <button id="btn">Shop Now</button>
        </Link>
        <img src={red} className="img-2"></img>
        <img src={img2} className="img"></img>
      </div>

      {/* ---------------------crocs cards---------------- */}
      <div className="horizontal-card">
        <img src={crocs} className="horizontal-img"></img>
        <h2 className="card-typography"> Graceful and Charming</h2>
        <p className="card-typography">
          Multiply the grace and charm you possess with footwear for her that
          enhances your style to the core. "Give a girl the right shoes and she
          can conqure the world"
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

      <hr style={{ width: "80%" }} />

      {/* ------------------------footer------------------------- */}

      <footer className="footer">
        <p>
          © Funky Feet 2022. All rights reserved. Site - Managed by Naman Jain .
        </p>

        <a href="https://github.com/Nmnjainsite">
          <BsGithub></BsGithub>
        </a>
        <a href="https://www.linkedin.com/in/naman-jain-97382b231/">
          <BsLinkedin></BsLinkedin>
        </a>
        <a href="https://twitter.com/NamanJa83726591">
          <BsTwitter></BsTwitter>
        </a>
        <a href="https://www.instagram.com/namanjain_321/">
          <BsInstagram></BsInstagram>
        </a>
      </footer>
    </div>
  );
}
