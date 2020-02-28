import React from 'react'

const Country = props =>{
  console.log(props.data)
 return(
  <div>
    <p>{props.name}</p>
    <p>{props.capital}</p>
    {/* <img src={props.flag}/> */}
    <p>{props.population}</p>
    
  </div>
 )
} 

export default Country