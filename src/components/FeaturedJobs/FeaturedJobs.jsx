import React from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  return (
    <section className="section-padding featured-jobs">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="headline-secondary h1 fw-bolder mb-3">
              Featured Jobs
            </h2>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
        </div>
        <div className="row">
          <FeaturedJob />
          <FeaturedJob />
          <FeaturedJob />
          <FeaturedJob />
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
