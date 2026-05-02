import React from "react";

const Section = ({ title, des }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <hr />
      <p>{des}</p>
    </div>
  );
};

export default Section;