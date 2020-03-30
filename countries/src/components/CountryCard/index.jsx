import React from "react";

import "./country.scss";

const CountryCard = props => {
  return (
    <div className="country-ctr">
      <img
        className="country-flag"
        src={props.data.flag}
        alt={props.data.name}
      />
      <p>{props.data.name}</p>
      <p>Population: {props.data.population}</p>
      <p>Capital: {props.data.capital}</p>
      <p>Region: {props.data.region}</p>
    </div>
  );
};

export default CountryCard;
