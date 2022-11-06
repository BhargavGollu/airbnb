import React, { Component } from "react";
import Slider from "react-slick";


import SliderItem from "../SliderItem";

import "./index.css"

export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div >
        <div className="slider-container">
        <h2> New this week </h2>
        <Slider {...settings}>
          <div>
            <div className="banner1">
                <div className="heading-cont">
                    <h4 className="heading">Collections</h4>
                    <h1 className="desc">Most popular <br/>
                    around the world</h1>
                </div>
                <button>
                    Show all
                </button>
            </div>
          </div>
          <div>
          <div className="banner2">
            <div className="heading-cont">
                <h4 className="heading">Collections</h4>
                <h1 className="desc">Most popular <br/>
                around the world</h1>
            </div>
            <button>
                Show all
            </button>
          </div>
          </div>
          <div className="banner3">
            <div className="heading-cont">
                <h4 className="heading">Collections</h4>
                <h1 className="desc">Most popular <br/>
                around the world</h1>
            </div>
            <button>
                Show all
            </button>
          </div>

          <div className="banner3">
            <div className="heading-cont">
                <h4 className="heading">Collections</h4>
                <h1 className="desc">Most popular <br/>
                around the world</h1>
            </div>
            <button>
                Show all
            </button>
          </div>
        </Slider>
        </div>
        <div >
            <div className="button-container">
                <button className="button">
                    Dates
                </button>
                <button className="button">
                    Group size
                </button>
                <button className="button">
                    more filters
                </button>
                <div>
                <hr className="horizontal"/>
                </div> 
                
            </div> 
            <SliderItem/>
            
        </div>

        

      </div>
    );
  }
}