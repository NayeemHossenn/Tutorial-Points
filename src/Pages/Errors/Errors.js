import React from "react";
import { useRouteError } from "react-router-dom";

const Errors = () => {
  const error = useRouteError();
  return (
    <div>
      <h2 className=" text-center text-warning">!!!!An error Occured!!!!!</h2>
      {error && (
        <div>
          <h4 className=" text-center text-danger">
            {error.statusText || error.message}
          </h4>
          <h4 className=" text-center text-danger">{error.status}</h4>
        </div>
      )}
    </div>
  );
};

export default Errors;
