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
      <p className="country-card-name">{props.data.name}</p>
      <p className="country-card-info">
        <strong>Population:</strong> {props.data.population}
      </p>
      <p className="country-card-info">
        <strong>Capital:</strong> {props.data.capital}
      </p>
      <p className='country-card-info'>
        <strong>Region:</strong> {props.data.region}
      </p>
    </div>
  );
};

export default CountryCard;
