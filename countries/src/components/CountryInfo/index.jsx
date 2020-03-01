import React from 'react'

const CountryInfo = (props)=>{
  console.log(props)
  const { data } = props.location.info
  return(
    <div>
      <h1>{data.name}</h1>
  <p>{data.nativeName}</p>
  <img src={data.flag}/>
  <p>{data.population}</p>
  <p>{data.region}</p>
  <p>{data.subregion}</p>
  <p>{data.capital}</p>
  <p>{data.topLevelDomain}</p>
  {/* <p>{data.currencies}</p> */}
  {/* <p>{data.languages}</p> */}
  {/* <p>{data.borderCountries}</p> */}
    </div>
  )
}

export default CountryInfo