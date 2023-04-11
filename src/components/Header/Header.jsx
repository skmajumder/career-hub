import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header py-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
            <Link to={"/"} className="text-logo text-decoration-none">
              <span className="fs-3 fw-bold">JobBox</span>
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-lg-6 text-sm-center mb-3 mb-lg-0">
            <nav className="main-navigation">
              <ul className="nav-list m-0 p-0 d-flex justify-content-center align-items-center gap-4">
                <li className="nav-list--item">
                  <Link to={"/"} className="text-decoration-none fw-semibold">
                    Home
                  </Link>
                </li>
                <li className="nav-list--item">
                  <Link
                    to={"/statistics"}
                    className="text-decoration-none fw-semibold"
                  >
                    Statistics
                  </Link>
                </li>
                <li className="nav-list--item">
                  <Link
                    to={"/applied-job"}
                    className="text-decoration-none fw-semibold"
                  >
                    Applied Job
                  </Link>
                </li>
                <li className="nav-list--item">
                  <Link
                    to={"/blog"}
                    className="text-decoration-none fw-semibold"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12 col-sm-12 col-lg-3 text-center text-lg-end mb-3 mb-lg-0">
            <button className="btn-apply">Start Applying</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
