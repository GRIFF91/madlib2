import React, { Component } from 'react';
import {Container } from 'reactstrap';
import './App.css';

import Storycard from "./components/storycard/storycard"
import JumbotronStory from './components/jumbotron/jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container clasName="container">
        
        <JumbotronStory />
        <Storycard />
      </Container>
      </div>
      
    );
  }
}

export default App;
