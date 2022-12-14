import { Footer } from "../footer/footer";
import { LoginNav } from "../Nav/login-nav";
import signIn from "../../assets/signIn.svg";
import { Link } from "react-router-dom";
import "./signup.css";
import React from "react";
const SignUp = () => {
  return (
    <>
      <section>
        <LoginNav />
        <div className="sign-box">
          <div className="sign-container">
            <h1>Register</h1>
            <h3>Fill Your Details</h3>
            <hr />
            <legend>First Name</legend>
            <input></input>
            <legend>Last Name</legend>
            <input></input>
            <legend>E-mail</legend>
            <input type="email"></input>
            <legend>Create Password</legend>
            <input type="password"></input>
            <div>
              <input type="checkbox"></input>
              <p>Yes, I agree to all the Terms, Privacy policy</p>
            </div>
            <Link to="/Login" className="register-btn">
              <button>Register</button>
            </Link>
          </div>
          <img
            src={signIn}
            className="signup-img"
            style={{ width: "50%", margin: "3rem", height: "30rem" }}
          ></img>
        </div>
        <Footer />
      </section>
    </>
  );
};

export { SignUp };
