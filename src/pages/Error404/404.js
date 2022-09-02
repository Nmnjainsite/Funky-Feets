import React from "react";
import error404 from "../../assets/404.svg";
import { Link } from "react-router-dom";
import { LoginNav } from "../Nav/login-nav";
function NotFound() {
  return (
    <div>
      <LoginNav />
      <h1 style={{ textAlign: "center", color: "#262626" }}>
        <span style={{ color: "red" }}> Oops</span> !! Looks like there's a
        broken link !! Please Try Again.
      </h1>
      <div>
        {" "}
        <img src={error404} style={{ width: "30%", marginLeft: "35%" }}></img>
      </div>
      <Link
        to="/"
        className="product-cart-button"
        style={{
          textDecoration: "none",
          padding: "0.5rem 5rem",
          marginLeft: "30%",
          position: "relative",
          top: "3rem",
        }}
      >
        Back To Home
      </Link>
    </div>
  );
}

export { NotFound };
