import React from "react";
import "./JobCategory.css";

const JobCategory = () => {
  return (
    <>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src="public/icons/accounts.png" alt="" />
          </div>
          <p className="job-category-name fw-bolder">Account & Finance</p>
          <p className="job-quantity">300 Jobs Available</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src="public/icons/business.png" alt="" />
          </div>
          <p className="job-category-name fw-bolder">Creative Design</p>
          <p className="job-quantity">300 Jobs Available</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src="public/icons/social-media.png" alt="" />
          </div>
          <p className="job-category-name fw-bolder">Marketing & Sales</p>
          <p className="job-quantity">300 Jobs Available</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src="public/icons/chip.png" alt="" />
          </div>
          <p className="job-category-name fw-bolder">Engineering Job</p>
          <p className="job-quantity">300 Jobs Available</p>
        </div>
      </div>
    </>
  );
};

export default JobCategory;
