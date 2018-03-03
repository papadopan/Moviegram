import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import friends from '../../../assets/friends.jpg'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class Slider extends Component {
    render() {
        return (
            <Carousel
              showIndicators= {false}
              showStatus = {false}
              showThumbs = {false}
              width = "100%"
            >
            <div className="movie_slides">
              <div className="card">
              <img src={friends} alt="movie"/>
              <div className="info">
                <h3>Friends(1994)</h3>
                <p><button className="btn">Add</button></p>
              </div>
              </div>
            </div>
            <div className="movie_slides">
              <div className="card">
              <img src={friends} alt="movie"/>
              <div className="info">
                <h3>Friends(1995)</h3>
                <p><button className="btn">Add</button></p>
              </div>
              </div>
            </div>
            <div className="movie_slides">
              <div className="card">
              <img src={friends} alt="movie"/>
              <div className="info">
                <h3>Friends(1996)</h3>
                <p><button className="btn">Add</button></p>
              </div>
              </div>
            </div>

            </Carousel>
        );
    }
}

export default Slider;
