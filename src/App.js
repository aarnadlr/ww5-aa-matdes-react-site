import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Theme } from 'rmwc/Theme';
import { Button, ButtonIcon } from 'rmwc/Button';

class App extends Component {
  render() {
    return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button raised theme="primary-bg on-primary">Primary World</Button>
        <Button raised theme="secondary-bg on-secondary">Secondary World</Button>
        <Button outlined theme="secondary-bg on-secondary" >Hello World</Button>
        <Button>Default</Button>
        <Button><ButtonIcon use="favorite" /> With Icon</Button>
        <Button raised>Raised</Button>
        <Button dense>Dense</Button>
        <Button unelevated>Unelevated</Button>
        <Button outlined>Outlined</Button>
        <Button raised theme="secondary-bg on-secondary">With Theme</Button>
     
      </div>
    );
  }
}

export default App;
