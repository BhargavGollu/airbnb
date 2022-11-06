import React, { Component } from "react";
import Slider from "react-slick";

import "./index.css" 

export default class SliderItem extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="items-container">
        
        <Slider {...settings}>
          <div>
            <button className="items">Great of groups</button>
          </div>
          <div>
          <button className="items">Animals</button>
          </div>
          <div>
          <button className="items">Baking</button>
         </div>
          <div>
          <button className="items">Drinks&Food</button>
          </div>
          <div>
          <button className="items">Cooking</button>
          </div>
          <div>
          <button className="items">Dance</button>
          </div>
          <div>
          <button className="items">Arts&writing</button>
          </div>
          <div>
          <button className="items">Entertainment</button>
          </div>
          <div>
          <button className="items">Family-Friendly</button>
          </div>
          <div>
          <button className="items">Fitness</button>
          </div>
        </Slider>
      </div>
    );
  }
}

