import './App.css';
import React, { Component } from 'react';

import WelcomeSlide from '../WelcomeSlide/WelcomeSlide';
import Load from '../Load/Load'

export default class App extends Component {
  constructor(props){
    super(props);
    this.setState = this.setState.bind(this)
    //Initialize with welcome page info
    this.state = {
      pageFamily: ["welcome"],
      content: "Mtn Proj Flash"
    };
  }

   //Returns slides based on pageFamilies that are active (in state list)
   render() {
    console.log(this.state)
    return(
      <div className="App">
        {this.state.pageFamily.includes("welcome") ? 
        <WelcomeSlide 
          pageFamily={this.state.pageFamily}
          content={this.state.content}
          updateState={this.setState}
        />
        : <></>}

        {this.state.pageFamily.includes("loading") ? 
        <Load/>
        : <></>}
      </div>

    )
  }
}


