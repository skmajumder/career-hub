import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import BlogQuestion from "../BlogQuestion/BlogQuestion";

const Blog = () => {
  return (
    <>
      <Breadcrumb pageTitle={"Blog"} />
      <BlogQuestion />
    </>
  );
};

export default Blog;
