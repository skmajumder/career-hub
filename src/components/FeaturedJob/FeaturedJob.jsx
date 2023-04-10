import React from "react";
import "./FeaturedJob.css";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const FeaturedJob = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrParttime,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    contactInformation: { phone, email },
  } = job;
  return (
    <div className="col-lg-6 mb-4">
      <div className="featured-job-item card">
        <div className="card-body">
          <img src={companyLogo} className="mb-3" alt="" />
          <h4 className="card-title fw-bolder mb-2">{jobTitle}</h4>
          <h5 className="card-subtitle mb-3 text-body-secondary">
            {companyName}
          </h5>
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
          <button className="btn-job-details">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
