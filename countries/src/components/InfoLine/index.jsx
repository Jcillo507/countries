import React from "react";
import "./infoLine.scss";

const InfoLine = props => {
  return (
    <div className="infoLine-ctr">
      <span className="line-title">
        <strong>{props.title}</strong>
      </span>
      <span className="line-data">{props.value}</span>
    </div>
  );
};

export default InfoLine;
