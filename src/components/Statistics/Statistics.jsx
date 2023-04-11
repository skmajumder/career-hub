import React from "react";
import "./Statistics.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Chart from "../Chart/Chart";

const Statistics = () => {
  return (
    <>
      <Breadcrumb pageTitle={"Statistics"} />
      <Chart />
    </>
  );
};

export default Statistics;
