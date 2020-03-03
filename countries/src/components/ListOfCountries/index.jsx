import React from "react";
import { Link } from "react-router-dom";

import CountryCard from "../CountryCard";

import { allCountryData } from "../services/ApiCall";

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [], 
      countryList:[],
      loaded:false
    };
  }
  componentDidMount = async () => {
    await this.getData();
  };
  getData = async () => {
    const data = await allCountryData();
    this.setState({ countries: data, loaded:true});
  };
  
  render() {
    const { countries } = this.state;
    const { countryList } = this.state
      if (this.state.loaded === true) {
        countries.map(cName =>
          countryList.push((new Object({country:cName.name, code:cName.alpha3Code})
          )
        ));
      }
      console.log(countryList)
    const countriesDisplay = 
       countries.map( data => (
         <Link
         to={{
           pathname:`/${data.name}`,
           info:{data:data}
         }}>
         <CountryCard
         list={countryList}
         data={data}
         key={data.name}
         />
         </Link>
       ))
      return (
        <div>
        {countriesDisplay}
      </div>
    );
  }
}

export default ListOfCountries;
