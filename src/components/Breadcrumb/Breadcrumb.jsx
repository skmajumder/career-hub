import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = ({ pageTitle }) => {
  pageTitle ? pageTitle : "Page Title";
  return (
    <section className="breadcrumbs py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="headline-secondary h1 fw-bolder mb-3">
              {pageTitle}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
