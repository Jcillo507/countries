import React from "react";

import { specificCountry } from "../services/ApiCall";

class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
      languages:[],
      borders:[]
    };
  }
  componentDidMount = async () => {
    await this.getData();
  };
  getData = async () => {
    const country = this.props.location.pathname.slice(1);
    const data = await specificCountry(country);
    this.setState({ data: data, borders:data[0].borders, languages:data[0].languages });
  };
  render() {
    const { data } = this.state;
    const { languages } = this.state
    const { borders } =this.state
    console.log(data, borders)
    const showInfo = data.map(data => (
      <div>
        <img src={data.flag} />
        <h1>{data.name}</h1>
        <p>Native Name: {data.nativeName}</p>
        <p>Population: {data.population}</p>
        <p>Region: {data.region}</p>
        <p>Subregion: {data.subregion}</p>
        <p>Capital: {data.capital}</p>
        <p>Top Level Domain: {data.topLevelDomain}</p>
        <p>Demonym: {data.demonym}</p>
        <p>Currency: {data.currencies[0].name}</p>
        <div>
          {languages.map(lang => (
            <span>{lang.name} </span>
          ))}
          
        </div>
      </div>
    ));

    return (
      <div>
        {showInfo}
        {borders}
      </div>
    );
  }
}

export default CountryInfo;
