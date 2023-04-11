import React, { createContext, useContext } from "react";
import "./JobDetails.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Details from "../Details/Details";
import { useLoaderData, useParams } from "react-router-dom";
import { JobAvailableContext } from "../../App";

const JobDetails = () => {
  const { jobID } = useParams();
  const jobs = useContext(JobAvailableContext);

  const jobData = jobs.find((job) => job.id === jobID);

  return (
    <>
      <Breadcrumb pageTitle={`Job Details`} />
      <Details job={jobData} />
    </>
  );
};

export default JobDetails;
