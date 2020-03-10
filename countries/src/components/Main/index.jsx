import React from "react";
import { Switch, Route } from "react-router-dom";

import ListOfCountries from "../ListOfCountries/";
import CountryInfo from "../CountryInfo/";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path={`/:name`} render={props => <CountryInfo {...props} />} />
        <ListOfCountries />
        <CountryInfo />
      </Switch>
    </div>
  );
};

export default Main;
