import React, { useContext, useState } from "react";
import JobList from "../JobList/JobList";
import { JobAvailableContext } from "../../App";
import { getStoredAppliedJobs } from "../../utilities/fakedb";

const AppliedJobList = () => {
  const appliedJobs = getStoredAppliedJobs();
  const availableJobs = useContext(JobAvailableContext);

  let jobs = [];
  if (appliedJobs.length > 0) {
    for (const jobID of appliedJobs) {
      jobs.push(availableJobs.find((job) => job.id === jobID));
    }
  }

  const [filter, setFilter] = useState("");

  function handleFilterChange(value) {
    setFilter(value);
  }
  jobs = filter
    ? jobs.filter(
        (job) => job.fulltimeOrParttime.toLowerCase() === filter.toLowerCase()
      )
    : jobs;

  return (
    <section className="section-padding applied-job-lists">
      <div className="container">
        <div className="row justify-content-end mb-5">
          <div className="col-lg-4 text-end">
            <div className="job-list-filter">
              <button
                onClick={() => handleFilterChange("Full-time")}
                className="btn-apply me-3"
              >
                Full Time
              </button>
              <button
                onClick={() => handleFilterChange("Part-time")}
                className="btn-apply"
              >
                Part Time
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {jobs.map((job) => (
            <JobList key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppliedJobList;
