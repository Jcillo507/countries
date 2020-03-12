import React from "react";
import { Link } from "react-router-dom";

import CountryCard from "../CountryCard";
import { allCountryData } from "../../services/ApiCall";

class ListOfCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loaded: false,
      search: [],
      results: []
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
    console.log(this.state.search);
    const countryList = [];
    if (this.state.loaded === true) {
      countries.map(cName =>
        countryList.push(
          new Object({ country: cName.name, code: cName.alpha3Code })
        )
      );
      sessionStorage.setItem("countryList", JSON.stringify(countryList));
    }

    const countriesDisplay =
      search.length === 0
        ? countries.map(data => (
            <Link
              key={data.name}
              to={{
                pathname: `/${data.name}`,
                info: { data: data }
              }}
            >
              <CountryCard data={data} />
            </Link>
          ))
        : countries
            .filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
            .map(data => (
              <Link
                key={data.name}
                to={{
                  pathname: `/${data.name}`,
                  info: { data: data }
                }}
              >
                <CountryCard data={data} />
              </Link>
            ));
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search for a country"
            onChange={this.searchChange}
          />
        </form>
        {countriesDisplay}
      </div>
    );
  }
}

export default ListOfCountries;
