import React, { Fragment } from "react";

import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../../helpers/auth";
import { getLocalStorage } from "../../helpers/localStorage";

const Header = ({ history }) => {
  const handleLogout = (evt) => {
    logout(() => {
      history.push("/login");
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </Fragment>
            )}
            {/* user */}
            {isAuthenticated() && isAuthenticated().role === 0 && (
              <Fragment>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-user"></i> Welcome
                    {getLocalStorage("user").username}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/dashboard" className="nav-link">
                    <i className="fas fa-home"></i> Dashboard
                  </Link>
                </li>
              </Fragment>
            )}
            {/* admin */}
            {isAuthenticated() && isAuthenticated().role === 1 && (
              <Fragment>
                <li className="nav-item">
                  <p>Welcome: {getLocalStorage("user").username} </p>
                </li>
                <li className="nav-item">
                  <Link to="/admin/dashboard" className="nav-link">
                    <i className="fas fa-home"></i> Dashboard
                  </Link>
                </li>
              </Fragment>
            )}
            {/* for both user and admin */}
            {isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <button
                    className="btn btn-link text-secondary text-decoration-none pl-0"
                    onClick={handleLogout}
                  >
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
