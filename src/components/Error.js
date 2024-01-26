import React from 'react';
import { useRouteError } from "react-router-dom";

const Error = () => {

  const err = useRouteError();
  console.log(err);
  return (
    <div>
    <h1>Ops!!! Error</h1>
    <br/>
    <h2>{err.status}:{err.statusText}</h2>
    </div>
  )
}

export default Error;