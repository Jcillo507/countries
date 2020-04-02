import React from 'react';
import './App.scss';
import Main from './components/Main/'


import "./components/Header/header.scss";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dark:false
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  
  changeTheme(){
    this.setState({dark:!this.state.dark})
  }
  render() {
    const { dark } = this.state
    console.log(dark)
    return (
      <div className={`App ${dark ? 'dark' : 'light'}`}>
        <div className="header-wrapper">
          <h1 className="header-title">Where in the World</h1>
          <h4>
            {dark ? 'Dark Mode ' : 'Light Mode'}
        <input type='checkbox' onClick={this.changeTheme}></input>
          </h4>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
