import React from 'react';
import { Jumbotron } from 'reactstrap';
import '../jumbotron/jumbotron.css';


const JumbotronStory = (props) => {
    return(
        <Jumbotron className="jumbo">
       
        <h1 className="display-3">Welcome to Madlib 1!!</h1>
        <p> Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.  It was 
        popularised in the 1960s with the release of Letraset
         sheets containing Lorem Ipsum passages, and more 
         recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.</p>
        </Jumbotron>
    )
}
export default JumbotronStory;