import React from "react";
import JobList from "../JobList/JobList";

const AppliedJobList = () => {
  return (
    <section className="section-padding applied-job-lists">
      <div className="container">
        <div className="row justify-content-end mb-5">
          <div className="col-lg-4 text-end">
            <div className="job-list-filter">
              <button className="btn-apply me-3">Full Time</button>
              <button className="btn-apply">Part Time</button>
            </div>
          </div>
        </div>
        <div className="row">
          <JobList />
          <JobList />
          <JobList />
          <JobList />
          <JobList />
        </div>
      </div>
    </section>
  );
};

export default AppliedJobList;
