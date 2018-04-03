import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Storycard from "./components/storycard/storycard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Storycard />
      </div>
    );
  }
}

export default App;
