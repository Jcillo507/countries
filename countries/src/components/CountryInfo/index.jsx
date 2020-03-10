import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import CountryCard from '../CountryCard/'

import { specificCountry } from "../services/ApiCall";

class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      data: [],
      languages: [],
      borders: [],
      list: [], 
      change:false
    };
  }
  componentDidMount = async () => {
    await this.getData();
    this.getCodes();
    // if (this.props.location.pathname !== this.state.country[0]) {
    //   await this.getData();
    // }
  };
  componentDidUpdate= async (prevProps)=>{
    if (prevProps.location.pathname!==this.props.location.pathname) {
     await this.getData()
    }
  }
  getData = async () => {
    const countryName = this.props.location.pathname.slice(1);
    const data = await specificCountry(countryName);
    this.setState({
      data: data,
      borders: data[0].borders,
      languages: data[0].languages,
      country: countryName
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
 const change =()=>{
   this.setState(this.state)
 }
    const borderList = list
      .filter(e => borders.includes(e.code))
      .map(el => (
        <div key={el.country}>
          <Link to={{ pathname: `/${el.country}` }} onClick={change}>
            {el.country}
          </Link>
    
        </div>
      ));

    const langArr = languages.map((lang, i, arr) => (
      <span key={lang.name}>
        {lang.name}
        {i !== arr.length - 1 ? ", " : ""}
      </span>
    ));
    const showInfo = data.map(data => (
      <div key={data.name}>
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
        <div>Languages: {langArr}</div>
      </div>
    ));
    return (
      <div>
        
        {showInfo}
        {borderList}
      </div>
    );
  }
}

export default CountryInfo;
