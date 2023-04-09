import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner-wrapper d-flex justify-content-center align-items-center">
            <div className="banner-text">
              <h1 className="banner-headline fw-bolder mb-3">
                One Step <br /> Closer To Your <br />{" "}
                <span className="banner-text--highlights">Dream Job</span>
              </h1>
              <p className="mb-3 w-50 lh-base">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="btn-apply">Get Started</button>
            </div>
            <div className="banner-img">
              <img src="imgs/banner-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
