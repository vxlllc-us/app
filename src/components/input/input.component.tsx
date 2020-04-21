import React, { Fragment } from "react";

export default ({
  children,
  input,
  meta: { invalid, touched, error },
  ...props
}: any) => (
  <Fragment>
    <input {...input} {...props} className={touched && error ? "error" : ""} />
    {touched && error && <small className={"error-message"}>{error}</small>}
  </Fragment>
);
