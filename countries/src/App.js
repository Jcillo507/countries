import React from 'react';
import './App.scss';
import Main from './components/Main/'

import "./components/Header/header.scss";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dark: false
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme() {
    this.setState({ dark: !this.state.dark })
  }
  render() {
    const { dark } = this.state
    console.log(dark)
    return (
      <div className={`App ${dark ? 'dark' : 'light'}`}>
        <div className="header-wrapper">
          <h1 className="header-title">Where in the World</h1>
          <div className='switch-ctr'>
            <h4 className='mode-title'>{dark ? 'Light Mode' : 'Dark Mode '}
              <label className="switch">
                <input type='checkbox' onClick={this.changeTheme} />
                <span className="slider"></span>
              </label>
            </h4>
          </div>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
