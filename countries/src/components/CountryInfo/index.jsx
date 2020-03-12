import React from "react";
import { Link } from "react-router-dom";

import { specificCountry } from "../../services/ApiCall";

class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      languages: [],
      borders: [],
      list: []
    };
  }
  componentDidMount = async () => {
    await this.getData();
    this.getCodes();
  };
  componentDidUpdate = async prevProps => {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      await this.getData();
    }
  };
  getData = async () => {
    const countryName = this.props.location.pathname.slice(1);
    const data = await specificCountry(countryName);
    this.setState({
      data: data,
      borders: data[0].borders,
      languages: data[0].languages
    });
  };

  getCodes = () => {
    const code = sessionStorage.getItem("countryList");
    const codes = JSON.parse(code);
    this.setState({ list: codes });
  };

  render() {
    const { data } = this.state;
    const { languages } = this.state;
    const { borders } = this.state;
    const { list } = this.state;
    const borderList = list
      .filter(e => borders.includes(e.code))
      .map(el => (
        <div key={el.country}>
          <Link to={{ pathname: `/${el.country}` }}>{el.country}</Link>
        </div>
      ));
    console.log(this.props);
    const langArr = languages.map((lang, i, arr) => (
      <span key={lang.name}>
        {lang.name}
        {i !== arr.length - 1 ? ", " : ""}
      </span>
    ));
    const showInfo = data.map(data => (
      <div key={data.name}>
        <img src={data.flag} alt={data.name} />
        <h1>{data.name}</h1>
        <p>Native Name: {data.nativeName}</p>
        <p>Population: {data.population}</p>
        <p>Region: {data.region}</p>
        <p>Subregion: {data.subregion}</p>
        <p>Capital: {data.capital}</p>
        <p>Top Level Domain: {data.topLevelDomain}</p>
        <p>Demonym: {data.demonym}</p>
        <p>Currency: {data.currencies[0].name}</p>
        <div>Languages: {langArr}</div>
      </div>
    ));
    return (
      <div>
        <Link to={{ pathname: "/" }}>
          <button>Back</button>
        </Link>
        {showInfo}
        {borderList}
      </div>
    );
  }
}

export default CountryInfo;
