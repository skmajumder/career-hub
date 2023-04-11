import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import AppliedJobList from "../AppliedJobList/AppliedJobList";

const Applied = () => {
  return (
    <>
      <Breadcrumb pageTitle={"Applied Jobs"} />
      <AppliedJobList />
    </>
  );
};

export default Applied;
