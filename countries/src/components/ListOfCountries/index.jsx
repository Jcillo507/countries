import React from "react";

import Country from "../Country/";

import { allCountryData } from "../services/ApiCall";

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loaded: false
    };
  }
  componentDidMount = async () => {
    await this.getData();
  };
  getData = async () => {
    const data = await allCountryData();
    this.setState({ countries: data, loaded: true });
  };

  render() {
    const countriesArray = Array.from(this.state.countries);
    const countries = 
       countriesArray.map( data => (
         <Country
         key={data.name}
         name={data.name}
         />
       ))
    return (
      <div>
        <p>working</p>
        {countries}
      </div>
    );
  }
}

export default ListOfCountries;
