import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from './BankAccount'

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
        </header>
      </div>
    );
  }
}

export default App;
