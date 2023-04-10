import React from "react";
import "./JobList.css";

import GoogleImg from "../../../public/imgs/google.png";
import NetflixImg from "../../../public/imgs/netflix.png";
import TeslaImg from "../../../public/imgs/tesla.png";
import AirbnbImg from "../../../public/imgs/airbnb.png";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const JobList = () => {
  return (
    <div className="col-lg-12 mb-4">
      <div className="d-grid applied-job-item justify-content-between align-items-center">
        <div className="company-img">
          <img src={GoogleImg} alt="" />
        </div>
        <div className="applied-job-detail">
          <h4 className="applied-job-title">Technical Database Engineer</h4>
          <p className="applied-job-company">Google LLC</p>
          <div class="job-type d-flex gap-3 mb-3">
            <span class="job-type-box fw-bolder">Remote</span>
            <span class="job-type-box fw-bolder">Full Time</span>
          </div>
          <div className="job-meta-info mb-3 d-flex gap-3">
            <div className="d-flex gap-1 align-items-center justify-content-between">
              <span>
                <MapPinIcon className="featured-job-icon" />
              </span>
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="d-flex gap-1 align-items-center justify-content-between">
              <span>
                <CurrencyDollarIcon className="featured-job-icon" />
              </span>
              <span>Salary : 100K - 150K</span>
            </div>
          </div>
        </div>
        <div>
          <button className="btn-job-details">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobList;
