import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';

import Storycard from "./components/storycard/storycard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Storycard />
        </Container>
      </div>
    );
  }
}

export default App;
