import React from "react";
import "./FeaturedJob.css";
import GoogleImg from "../../../public/imgs/google.png";
import NetflixImg from "../../../public/imgs/netflix.png";
import TeslaImg from "../../../public/imgs/tesla.png";
import AirbnbImg from "../../../public/imgs/airbnb.png";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const FeaturedJob = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="featured-job-item card">
        <div className="card-body">
          <img src={GoogleImg} className="mb-3" alt="" />
          <h4 className="card-title mb-2">Technical Database Engineer</h4>
          <h5 className="card-subtitle mb-3 text-body-secondary">Google LLC</h5>
          <div className="job-type d-flex gap-3 mb-3">
            <span className="job-type-box fw-bolder">Remote</span>
            <span className="job-type-box fw-bolder">Full Time</span>
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
          <button className="btn-job-details">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
