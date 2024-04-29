import './App.css';
import React, { Component } from 'react';
import Slides from '../Slides/Slides'

export default class App extends Component {
  constructor(props){
    super(props);

    //Initialize with welcome page info
    this.state = {
      pageFamily: "welcome",
    };
  }

  // Creates a collection of Slides to display based on which type via state.pageFamily
  toDisplay () {
    return(
      <Slides 
      pageFamily={this.state.pageFamily}
      />
    )
  }

   //Returns a scrollable page made of Slides that fetches data as needed
   render() {
    return(
      <>{this.toDisplay()}</>
    )
  }
}


