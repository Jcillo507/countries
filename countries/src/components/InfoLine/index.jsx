import React from "react";

const InfoLine = props => {
  return(
  <div>
    <span>{props.title}</span>
    <span>{props.value}</span>
  </div>
  )};

export default InfoLine;
