import React from "react";
import "./JobList.css";

import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const JobList = ({ job }) => {
  const {
    id: jobID,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrParttime,
    salary,
    contactInformation: { phone, email },
  } = job;

  const navigate = useNavigate();

  function navigateToJobDetails(jobID) {
    navigate(`/job-details/${jobID}`);
  }

  return (
    <div className="col-lg-12 mb-4">
      <div className="d-grid applied-job-item justify-content-between align-items-center">
        <div className="company-img">
          <img src={companyLogo} alt="" />
        </div>
        <div className="applied-job-detail">
          <h4 className="applied-job-title">{jobTitle}</h4>
          <p className="applied-job-company">{companyName}</p>
          <div className="job-type d-flex gap-3 mb-3">
            <span className="job-type-box fw-bolder">{remoteOrOnsite}</span>
            <span className="job-type-box fw-bolder">{fulltimeOrParttime}</span>
          </div>
          <div className="job-meta-info mb-3 d-flex gap-3">
            <div className="d-flex gap-1 align-items-center justify-content-between">
              <span>
                <MapPinIcon className="featured-job-icon" />
              </span>
              <span>{location}</span>
            </div>
            <div className="d-flex gap-1 align-items-center justify-content-between">
              <span>
                <CurrencyDollarIcon className="featured-job-icon" />
              </span>
              <span>Salary : {salary}</span>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => navigateToJobDetails(jobID)}
            className="btn-job-details"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobList;
