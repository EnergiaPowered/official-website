import React from "react";

const Input = ({ name, label ,error ,...res}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        {...res}
        autoFocus
        id={name}
        className="form-control"
      />
      {error&& <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input