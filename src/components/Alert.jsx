import React from "react";

const Alert = ({ message, type }) => (
  <div className={`alert alert-${type} alert-dismissible fade show position-fixed`} style={{ top: 20, right: 20, zIndex: 9999, minWidth: 300 }}>
    {message}
  </div>
);

export default Alert;
