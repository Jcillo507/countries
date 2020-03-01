import React from "react";

import './country.scss'

const CountryCard = props => {
  console.log(props);
  return (
    <div className='country-ctr'>
      <p>{props.data.name}</p>
      <p>{props.data.capital}</p>
      <img className='country-flag'src={props.data.flag}/>
      <p>{props.data.population}</p>
      <p>{props.data.region}</p>
    </div>
  );
};

export default CountryCard;