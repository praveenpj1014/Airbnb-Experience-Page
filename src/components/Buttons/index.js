import React, { Component } from "react";
import Slider from "react-slick";
import "./index.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <>
        <div>
          <button className="buttons">Dates</button>
          <button className="buttons">Group size</button>
          <button className="buttons">More filter</button>
        </div>
        <div className="button-container">
          <Slider {...settings}>
            <div>
              <button className="buttons">Great for Group</button>
            </div>
            <div>
              <button className="buttons">Family-friendly</button>
            </div>
            <div>
              <button className="buttons">Animals</button>
            </div>
            <div>
              <button className="buttons">Arts & writing</button>
            </div>
            <div>
              <button className="buttons">Banking</button>
            </div>
            <div>
              <button className="buttons">Cooking</button>
            </div>
            <div>
              <button className="buttons">Dance</button>
            </div>
            <div>
              <button className="buttons">Drinks</button>
            </div>
            <div>
              <button className="buttons">Entertainment</button>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
