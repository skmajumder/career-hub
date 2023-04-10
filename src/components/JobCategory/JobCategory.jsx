import React from "react";
import "./JobCategory.css";

const JobCategory = ({ category }) => {
  const { image, name, jobs } = category;
  console.log(image, name, jobs);
  return (
    <>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src={image} alt={name} />
          </div>
          <p className="job-category-name fw-bolder">{name}</p>
          <p className="job-quantity">{jobs}</p>
        </div>
      </div>
    </>
  );
};

export default JobCategory;
