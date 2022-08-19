import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Footer } from "./footer";
import funky from "./funky.jpg";
import { LoginNav } from "./login-nav";
function Login() {
  return (
    <>
      <section>
        <LoginNav />
        <div className="login-container">
          <div className="login-box">
            <div className="login-col-1">
              <h1>Log In.</h1>
              <p style={{ color: "grey" }}>
                Enter your Credentials to access your account
              </p>

              <button className="login-google">
                <span
                  style={{
                    margin: "0.7rem",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                  }}
                >
                  G+
                </span>{" "}
                Login With Google
              </button>
            </div>

            <div className="email-box">
              <div style={{ marginTop: "0.8rem" }}>E-mail</div>
              <input placeholder="Enter your email "></input>

              <div>
                <span>Password </span>
                <small className="forgot-pass"> Forgot Password?</small>
              </div>
              <input placeholder="Enter your password" type="password"></input>
              <legend>Confirm Password</legend>
              <input placeholder="Confirm password"></input>
            </div>

            <div>
              <Link to="/Products">
                <button className="login-button">Login</button>
              </Link>
              <Link to="/home">
                <button className="login-button-2">Login As Guest</button>
              </Link>
            </div>

            <p>
              Not a Member?
              <Link
                to="/SignUp"
                style={{ color: "green", textDecoration: "none" }}
              >
                SignUp
              </Link>
            </p>
          </div>
          <img src={funky} className="login-img"></img>
        </div>
        <Footer />
      </section>
    </>
  );
}

export { Login };
