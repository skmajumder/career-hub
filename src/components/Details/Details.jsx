import React from "react";
import "./Details.css";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Details = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrParttime,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    contactInformation: { phone, email },
  } = job;

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="job-description">
              <p className="company">
                <strong>Company:</strong> {companyName}
              </p>
              <p className="description">
                <strong>Job Description:</strong> {jobDescription}
              </p>
              <p className="responsibility">
                <strong>Job Responsibility:</strong> {jobResponsibility}
              </p>
              <p className="requirements">
                <strong>Educational Requirements:</strong>
                <br />
                {educationalRequirements}
              </p>
              <p className="experiences">
                <strong>Experiences:</strong>
                <br />
                {experiences}
              </p>
            </div>
          </div>
          <aside className="col-lg-4">
            <div className="job-sidecard mb-3">
              <div className="salary mb-4">
                <p className="fw-bolder">Job Details</p>
                <hr />
                <p className="d-flex gap-1 align-items-center justify-content-start">
                  <span>
                    <CurrencyDollarIcon className="featured-job-icon" />
                  </span>
                  <span>
                    <strong>Salary:</strong> {salary}
                  </span>
                </p>
                <p className="d-flex gap-1 align-items-center justify-content-start">
                  <span>
                    <CalendarDaysIcon className="featured-job-icon" />
                  </span>
                  <span>
                    <strong>Job Title:</strong> {jobTitle} <br /> ({fulltimeOrParttime}
                    )
                  </span>
                </p>
              </div>
              <div className="contact-info">
                <p className="fw-bolder">Contact Information</p>
                <hr />
                <p className="d-flex gap-1 align-items-center justify-content-start">
                  <span>
                    <PhoneIcon className="featured-job-icon" />
                  </span>
                  <span>
                    <strong>Phone:</strong> {phone}
                  </span>
                </p>
                <p className="d-flex gap-1 align-items-center justify-content-start">
                  <span>
                    <EnvelopeIcon className="featured-job-icon" />
                  </span>
                  <span>
                    <strong>Email:</strong> {email}
                  </span>
                </p>
                <p className="d-flex gap-1 align-items-center justify-content-start">
                  <span>
                    <MapPinIcon className="featured-job-icon" />
                  </span>
                  <span>
                    <strong>Address:</strong> {location}
                  </span>
                </p>
              </div>
            </div>
            <button className="btn-apply w-100">Apply Now</button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Details;
