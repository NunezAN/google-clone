import React from "react";
import "./Section.css";

const Section = ({ Icon, title, selected }) => {
  return (
    <div className={`section ${selected && `selected`}`}>
      <Icon className="section__icon" />
      <p className="section__title">{title}</p>
    </div>
  );
};

export default Section;
