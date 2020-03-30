import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import './listOfCountries.scss'

import CountryCard from "../CountryCard";
import { allCountryData } from "../../services/ApiCall";

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loaded: false,
      search: [],
      region: "World"
    };
  }
  componentDidMount = async () => {
    await this.getData();
  };
  getData = async () => {
    const data = await allCountryData();
    this.setState({ countries: data, loaded: true });
  };
  searchChange = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  render() {
    const { countries } = this.state;
    const { search } = this.state;
    const { region } = this.state;
    const countryList = [];
    const options = ["World", "Africa", "America", "Asia", "Europe", "Oceania"];
    if (this.state.loaded === true) {
      countries.map(cName =>
        countryList.push({ country: cName.name, code: cName.alpha3Code })
      );
      sessionStorage.setItem("countryList", JSON.stringify(countryList));
    }
    const onDDClick = e => {
      this.setState({ region: e.value });
    };
    const countryIteration = data => (
      <div className='country-list'>
      <Link
        key={data.name}
        to={{
          pathname: `/${data.name}`,
          info: { data: data }
        }}
      >
        <CountryCard data={data} />
      </Link></div>
    );
    const countriesDisplay =
      region === undefined || region === "World"
        ? search.length === 0
          ? countries.map(countryIteration)
          : countries
              .filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
              .map(countryIteration)
        : search.length === 0
        ? countries.filter(e => e.region.includes(region)).map(countryIteration)
        : countries
            .filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
            .filter(e => e.region.includes(region))
            .map(countryIteration);

    return (
      <div>
        <span className='search-ctr'>
        <form>
          <input
          className='search-input'
            type="text"
            placeholder="Search for a country"
            onChange={this.searchChange}
          />
        </form>
        <Dropdown
        className='dropdown'
          options={options}
          onChange={onDDClick}
          placeholder="Filter By Region"
        /></span>
        <h1 className='title'>{region}</h1>
        <div className='list-ctr'>
        {countriesDisplay}</div>
      </div>
    );
  }
}

export default ListOfCountries;
