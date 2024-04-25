import './SlideContainer.css';
import React, { Component } from 'react';
import Slide from '../Slide/Slide'

export default class SlideContainer extends Component {

 
    render() {
      return(
        <div className="SlideContainer">
            <Slide />
            <Slide />
        </div>
      )
    }
  }