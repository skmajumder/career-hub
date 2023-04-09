import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">
          Error <br /> {status || 404}
        </h1>
        <p className="fs-3">
          <span className="text-danger">Opps!</span> {error?.message}
        </p>
        <p className="lead">
          You can still explore other thing. Now back to the home.
        </p>
        <Link to={"/"} className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
