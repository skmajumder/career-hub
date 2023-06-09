import React from "react";
import "./Banner.css";
import BannerImg from "../../../public/imgs/banner-img.png";

const Banner = () => {
  return (
    <>
      <section className="banner py-5">
        <div className="container">
          <div className="banner-wrapper d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="banner-text">
              <h1 className="banner-headline fw-bolder mb-3">
                One Step <br /> Closer To Your <br />
                <span className="banner-text--highlights">Dream Job</span>
              </h1>
              <p className="mb-3 w-50 lh-base">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </p>
              <button className="btn-apply">Get Started</button>
            </div>
            <div className="banner-img-wrapper">
              <img src={BannerImg} className="banner-img img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
