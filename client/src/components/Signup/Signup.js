import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import "../Login/Login.css";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "dango",
    email: "s@gmail.com",
    password: "esf",
  });

  const { username, email, password } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };
  return (
    <form action="signup" onSubmit={handleSubmit} className="sign-up-form form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" name="email" value={email} />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
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
  );
};
/*     <form className="signup-form" onSubmit={handleSubmit} noValidate>
      
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input
          name="username"
          value={username}
          className="form-control"
          placeholder="Username"
          type="text"
          onChange={handleChange}
        />
      </div>
    
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <input
          name="email"
          value={email}
          className="form-control"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          name="password"
          value={password}
          className="form-control"
          placeholder="Create password"
          type="password"
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          name="password2"
          value={password2}
          className="form-control"
          placeholder="Confirm password"
          type="password"
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Signup
        </button>
      </div>
      
      <p className="text-center text-white">
        Have an account? <Link to="/signin">Log In</Link>
      </p>
    </form> */

/****************************
 * RENDERER*/

export default Signup;
