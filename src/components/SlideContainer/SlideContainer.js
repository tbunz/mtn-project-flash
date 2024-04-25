import './SlideContainer.css';
import React, { Component } from 'react';
import Slide from '../Slide/Slide'
import InfiniteScroll from 'react-infinite-scroll-component';

//Maintains state of info on page. Creates/destroys Slides as necessary
export default class SlideContainer extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      img: ["img1", "img2", "img3"],
      pageFamily: "welcomeSlide",
      content: ["Mountain Project Flash"]
    };
  }
  
  // Retrieve next info on scroll
  fetchPage () {
    return "next"; 
  };

  //Returns a scrollable page that fetches data as needed as user scrolls
  render() {
    return(
      <div className="SlideContainer">

        <InfiniteScroll
          dataLength={this.state.content.length}
          next={this.fetchPage}
          hasMore={true}
        >

        {this.state.content.map((i, index) => (
          <div key={index}>
            <Slide 
            index={index} 
            pageFamily={this.state.pageFamily}
            content={this.state.content}
            imgs={this.state.img}
            />
          </div>
        ))}


        </InfiniteScroll>
      </div>
    )
  }
  }