import React from "react";
import "./Details.css";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Details = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="job-description">
              <p className="description">
                <strong>Job Description:</strong> A UI/UX (User Interface/User
                Experience) designer is responsible for designing and creating
                engaging and effective interfaces for software and web
                applications. This includes designing the layout, visual design,
                and interactivity of the user interface.
              </p>
              <p className="responsibility">
                <strong>Job Responsibility:</strong> Collaborating with
                cross-functional teams: UI/UX designers often work closely with
                other teams, including product management, engineering, and
                marketing, to ensure that the user interface is aligned with
                business and technical requirements. You will need to be able to
                effectively communicate your design ideas and gather feedback
                from other team members.
              </p>
              <p className="requirements">
                <strong>Educational Requirements:</strong>
                <br />
                Bachelor degree to complete any reputational university.
              </p>
              <p className="experiences">
                <strong>Experiences:</strong>
                <br />
                2-3 Years in this field.
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
                    <strong>Salary:</strong> 100K - 150K
                  </span>
                </p>
                <p className="d-flex gap-1 align-items-center justify-content-start">
                  <span>
                    <CalendarDaysIcon className="featured-job-icon" />
                  </span>
                  <span>
                    <strong>Job Title:</strong> Product Designer
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
                    <strong>Phone:</strong> 01750-00 00 00
                  </span>
                </p>
                <p className="d-flex gap-1 align-items-center justify-content-start">
                  <span>
                    <EnvelopeIcon className="featured-job-icon" />
                  </span>
                  <span>
                    <strong>Email:</strong> info@gmail.com
                  </span>
                </p>
                <p className="d-flex gap-1 align-items-center justify-content-start">
                  <span>
                    <MapPinIcon className="featured-job-icon" />
                  </span>
                  <span>
                    <strong>Address:</strong> Dhanmondi 32, Sukrabad Dhaka,
                    Bangladesh
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
