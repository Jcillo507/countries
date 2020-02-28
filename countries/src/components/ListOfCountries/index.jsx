import React from "react";

import Country from "../Country/";

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
         <Country
         data={data}
         key={data.name}
         name={data.name}
         capital={data.capital}
         population={data.population}
        //  flag={data.flag}
         />
       ))
    return (
      <div>
        {countries}
      </div>
    );
  }
}

export default ListOfCountries;
