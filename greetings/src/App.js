import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello'
import SayHowdy from './SayHowdy'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <SayHello/>
            <SayHowdy/>
        </header>
      </div>
    );
  }
}

export default App;
