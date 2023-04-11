"use strict";

import { toast } from "react-hot-toast";

const notify = () => toast.error("You already applied this job");
const notifySuccess = () => toast.success("Job apply Successfully");

// Get prev applied data from local storage
const getStoredAppliedJobs = () => {
  let appliedJobs = [];
  const storedJobs = localStorage.getItem("appliedJobs");
  storedJobs && (appliedJobs = JSON.parse(storedJobs));
  return appliedJobs;
};

// Add a new job data to the localStorage
const addToDb = (jobID) => {
  const appliedJobs = getStoredAppliedJobs();
  if (appliedJobs) {
    if (appliedJobs.includes(jobID) !== true) {
      appliedJobs.push(jobID);
    } else {
      notify();
      return;
    }
  } else {
    appliedJobs = [jobID];
  }
  localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  notifySuccess();
};
export { getStoredAppliedJobs, addToDb };
