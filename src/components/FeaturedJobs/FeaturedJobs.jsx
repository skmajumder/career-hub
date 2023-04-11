import React, { useContext, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { JobAvailableContext } from "../../App";

const FeaturedJobs = () => {
  const jobs = useContext(JobAvailableContext);

  const [availableJob, setAvailableJob] = useState(jobs);
  const [showAll, setShowAll] = useState(false);

  const handleShowAllJob = () => {
    setShowAll(true);
  };

  return (
    <section className="section-padding featured-jobs">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="headline-secondary h1 fw-bolder mb-3">
              Featured Jobs
            </h2>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
        </div>
        <div className="row mb-4">
          {showAll
            ? availableJob.map((job) => <FeaturedJob key={job.id} job={job} />)
            : availableJob
                .slice(0, 4)
                .map((job) => <FeaturedJob key={job.id} job={job} />)}
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            {!showAll && (
              <button onClick={handleShowAllJob} className="btn-job-details">
                See All Jobs
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
