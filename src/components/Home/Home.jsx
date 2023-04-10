import React, { createContext, useState } from "react";
import Banner from "../Banner/Banner";
import JobCategories from "../JobCategories/JobCategories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";

export const JobCategoriesContext = createContext([]);
export const JobAvailableContent = createContext([]);

const Home = () => {
  const [category, jobs] = useLoaderData();
  return (
    <>
      <JobCategoriesContext.Provider value={category}>
        <JobAvailableContent.Provider value={jobs}>
          <Banner />
          <JobCategories />
          <FeaturedJobs />
        </JobAvailableContent.Provider>
      </JobCategoriesContext.Provider>
    </>
  );
};

export default Home;
