import React from "react";
import "./JobCategory.css";

import AccountsIcon from "../../../public/Icons/accounts.png";
import BusinessIcon from "../../../public/Icons/business.png";
import SocialIcon from "../../../public/Icons/social-media.png";
import ChipIcon from "../../../public/Icons/chip.png";

const JobCategory = () => {
  return (
    <>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src={AccountsIcon} alt="" />
          </div>
          <p className="job-category-name fw-bolder">Account & Finance</p>
          <p className="job-quantity">300 Jobs Available</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src={BusinessIcon} alt="" />
          </div>
          <p className="job-category-name fw-bolder">Creative Design</p>
          <p className="job-quantity">300 Jobs Available</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src={SocialIcon} alt="" />
          </div>
          <p className="job-category-name fw-bolder">Marketing & Sales</p>
          <p className="job-quantity">300 Jobs Available</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="job-list-item">
          <div className="job-icon mb-3">
            <img src={ChipIcon} alt="" />
          </div>
          <p className="job-category-name fw-bolder">Engineering Job</p>
          <p className="job-quantity">300 Jobs Available</p>
        </div>
      </div>
    </>
  );
};

export default JobCategory;
