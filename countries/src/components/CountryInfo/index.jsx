import React from "react";
import { Link } from "react-router-dom";

import "./countryInfo.scss";

import InfoLine from "../InfoLine/";

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
        <span key={el.country}>
          <button className="border-button">
            <Link className="border" to={{ pathname: `/${el.country}` }}>
              {el.country}
            </Link>
          </button>
        </span>
      ));
    console.log(this.props);
    const langArr = languages.map((lang, i, arr) => (
      <span key={lang.name}>
        {lang.name}
        {i !== arr.length - 1 ? ", " : ""}
      </span>
    ));
    const showInfo = data.map(data => (
      <div key={data.name} className="info-wrapper">
        <img className="country-info-flag" src={data.flag} alt={data.name} />
        <div className="info-ctr">
          <h1 className="country-info-name">{data.name}</h1>
          <div className="data-wrapper">
            <div className="data-ctr">
              <InfoLine title="Native Name: " value={data.nativeName} />
              <InfoLine title="Population: " value={data.population} />
              <InfoLine title="Region: " value={data.region} />
              <InfoLine title="Subregion: " value={data.subregion} />
              <InfoLine title="Capital: " value={data.capital} />
            </div>
            <div className="data-ctr">
              <InfoLine
                title="Top Level Domain: "
                value={data.topLevelDomain}
              />
              <InfoLine title="Demonym: " value={data.demonym} />
              <InfoLine title="Currency: " value={data.currencies[0].name} />
              <InfoLine title="Languages: " value={langArr} />
            </div>
          </div>
          <div className="border-ctr">
            <strong className="border-title">Border Countries:</strong>{" "}
            <span>
              {borderList.length > 0 ? borderList : "No Border Countries"}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="country-info-ctr">
        <Link to={{ pathname: "/" }}>
          <button>Home</button>
        </Link>
        {showInfo}
      </div>
    );
  }
}

export default CountryInfo;
