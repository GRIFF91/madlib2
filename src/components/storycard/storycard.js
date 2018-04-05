import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Storycard = (props) => {
  return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>City Story Madlib</CardTitle>
          <CardText>
          As you walk along the main street in (city name) you see a large 
          (animal name). You move closer to investigate, but the animal 
          begins to charge at you. You turn and run while shouting “(an exclamation)!” 
          You trip and roll into a ditch where you find a/an (noun). You use it to ward 
          off the beast and save (celebrity name) from danger. Your new celebrity friend 
          thanks you and asks you to a dinner of (food). 
          </CardText>
        <Button>Button</Button>
      </Card>
    
  );
};

export default Storycard;