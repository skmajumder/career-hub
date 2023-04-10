import React, { useContext } from "react";
import JobCategory from "../JobCategory/JobCategory";
import { JobCategoriesContext } from "../Home/Home";

const JobCategories = () => {
  const jobCategories = useContext(JobCategoriesContext);
  return (
    <section className="section-padding job-categories">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="headline-secondary h1 fw-bolder mb-3">
              Job Category List
            </h2>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
        </div>
        <div className="row">
          {jobCategories.map((jobCategory) => (
            <JobCategory key={jobCategory.id} category={jobCategory} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
