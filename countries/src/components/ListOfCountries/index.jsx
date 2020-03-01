import React from "react";
import { Link } from "react-router-dom";

import CountryCard from "../Country/";


import { allCountryData } from "../services/ApiCall";

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  componentDidMount = async () => {
    await this.getData();
  };
  getData = async () => {
    const data = await allCountryData();
    this.setState({ countries: data});
  };

  render() {
    const countriesArray = Array.from(this.state.countries);
    const countries = 
       countriesArray.map( data => (
         <Link
         to={{
           pathname:`/${data.name}`,
           info:{data:data}
         }}>
         <CountryCard
         data={data}
         key={data.name}
         />
         </Link>
       ))
      return (
        <div>
        {countries}
      </div>
    );
  }
}

export default ListOfCountries;
