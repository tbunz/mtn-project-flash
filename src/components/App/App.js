import './App.css';
import React, { Component } from 'react';
import Slides from '../Slides/Slides'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class App extends Component {
  constructor(props){
    super(props);

    //Initialize with welcome page info
    this.state = {
      pageFamily: "welcome",
      content: ["Mountain Project Flash"]
    };
  }
  
  // Creates a collection of Slides to display from state.content
  toDisplay () {
    return(
      <Slides 
      pageFamily={this.state.pageFamily}
      content={this.state.content}
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


