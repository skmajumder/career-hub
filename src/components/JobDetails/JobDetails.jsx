import React, { createContext, useContext } from "react";
import "./JobDetails.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Details from "../Details/Details";
import { useLoaderData, useParams } from "react-router-dom";
import { JobAvailableContext } from "../../App";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const { jobID } = useParams();
  const jobs = useContext(JobAvailableContext);

  const jobData = jobs.find((job) => job.id === jobID);

  const handleApplyNowJob = (jobID) => {
    addToDb(jobID);
  };

  return (
    <>
      <Breadcrumb pageTitle={`Job Details`} />
      <Details job={jobData} handleApplyNowJob={handleApplyNowJob} />
    </>
  );
};

export default JobDetails;
