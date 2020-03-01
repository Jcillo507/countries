import React from "react";

import { specificCountry } from "../services/ApiCall";

class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount = async () => {
    await this.getData();
  };
  getData = async () => {
    const country = this.props.location.pathname.slice(1);
    const data = await specificCountry(country);
    this.setState({ data: data });
  };
  render() {
    const { data } = this.state;

    const show = data.map(data => (
      <div>
        <h1>{data.alpha3code}</h1>
        <p>{data.nativeName}</p>
        <img src={data.flag} />
        <p>{data.population}</p>
        <p>{data.region}</p>
        <p>{data.subregion}</p>
        <p>{data.capital}</p>
        <p>{data.topLevelDomain}</p>
        {/* <p>{data.currencies}</p>
        <p>{data.languages}</p>
        <p>{data.borderCountries}</p> */}
      </div>
    ));
    return <div>{show}</div>;
  }
}

export default CountryInfo;
