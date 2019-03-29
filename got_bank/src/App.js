import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from './BankAccount'
import Netflix from "./Netflix";

var account =
    {
      name:"Thomas",
      balance:20,
    };

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BankAccount account={account} />
          <Netflix/>
        </header>
      </div>
    );
  }
}

export default App;
