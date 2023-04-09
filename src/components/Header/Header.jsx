import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3">
            <Link to={"/"} className="text-logo text-decoration-none">
              <p className="fs-3 fw-bold">JobBox</p>
            </Link>
          </div>
          <div className="col-lg-6">
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
          <div className="col-lg-3 text-end">
            <button className="btn btn-success">Start Applying</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
