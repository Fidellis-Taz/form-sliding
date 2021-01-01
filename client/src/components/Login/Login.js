import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import Signup from "../Signup/Signup";
const Signin = () => {
  /****************************
   * EVENT HANDLERS
   ***************************/
  const handleChange = (evt) => {};

  let history = useHistory();
  const [active, setActive] = useState(false);

  const handleSignup = (e) => {
    console.log("btn clicked");

    setActive(!active);
  };
  /****************************
   * VIEWS
   ***************************/
  return (
    <div className={`containa ${active ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <Link to="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
          <Signup />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
          <img src="images/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleSignup}
            >
              Sign in
            </button>
          </div>
          <img src="images/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};
/*  <form classNameName="signup-form" onSubmit={handleSubmit} noValidate>
      
      <div classNameName="form-group input-group">
        <div classNameName="input-group-prepend">
          <span classNameName="input-group-text">
            <i classNameName="fa fa-envelope"></i>
          </span>
        </div>
        <input
          name="email"
          value={email}
          classNameName="form-control"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
        />
      </div>
      
      <div classNameName="form-group input-group">
        <div classNameName="input-group-prepend">
          <span classNameName="input-group-text">
            <i classNameName="fa fa-lock"></i>
          </span>
        </div>
        <input
          name="password"
          value={password}
          classNameName="form-control"
          placeholder="Create password"
          type="password"
          onChange={handleChange}
        />
      </div>

      <div classNameName="form-group">
        <button type="submit" classNameName="btn btn-primary btn-block">
          Signin
        </button>
      </div>
      
      <p classNameName="text-center text-white">
        Don't have an account? <Link to="/signup">Register here</Link>
      </p>
    </form> */

/****************************
 * RENDERER
 ***************************/

export default Signin;
