import React from "react";
import { useRouteError } from "react-router-dom";
// by using use route error we can catch exact type of error
export const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div>Error</div>
      <div>OOPS page not found</div>
      <div>
        {err.status}:{err.statusText}
      </div>
    </>
  );
};
