import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import CountryCard from "../CountryCard";
import { allCountryData } from "../../services/ApiCall";

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loaded: false,
      search: [],
      region: ""
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
    const { region } =this.state
    const countryList = [];
    const options = ["World", "Africa", "America", "Asia", "Europe", "Oceania"];
    // const defaultOption = "Filter By Region";
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
      <Link
        key={data.name}
        to={{
          pathname: `/${data.name}`,
          info: { data: data }
        }}
      >
        <CountryCard data={data} />
      </Link>
    );

    const countriesDisplay =
      region === undefined || region ==="World"
        ? search.length === 0
          ? countries.map(countryIteration)
          : countries
              .filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
              .map(countryIteration)
        : countries
            .filter(e =>
              e.region.toLowerCase().includes(this.state.region.toLowerCase())
            )
            .map(countryIteration);
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search for a country"
            onChange={this.searchChange}
          />
        </form>
        <Dropdown
          options={options}
          onChange={onDDClick}
          placeholder="Filter By Region"
        />
        {countriesDisplay}
      </div>
    );
  }
}

export default ListOfCountries;
