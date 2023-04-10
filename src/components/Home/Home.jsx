import React, { createContext } from "react";
import Banner from "../Banner/Banner";
import JobCategories from "../JobCategories/JobCategories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";

export const JobCategoriesContext = createContext([]);

const Home = () => {
  const [category, jobs] = useLoaderData();
  return (
    <>
      <JobCategoriesContext.Provider value={category}>
        <Banner />
        <JobCategories />
        <FeaturedJobs />
      </JobCategoriesContext.Provider>
    </>
  );
};

export default Home;
