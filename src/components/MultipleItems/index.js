import React, { Component } from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import "./index.css";

const cardData = [
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708546/p1_u3ztpq.webp",
    city: "Mexico",
    rating: "4.68",
    text: "Live tulum like a local",
    price: "630",
    id: "1"
  },
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708560/p2_t2w1cy.webp",
    city: "United States",
    rating: "4.75",
    text: "Plan a trip to amazing Austin",
    price: "2,050",
    id: "2"
  },
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708569/p3_nv1zoc.webp",
    city: "Italy",
    rating: "4.91",
    text: "Create your Rome itinerery with Debora",
    price: "980",
    id: "3"
  },
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708580/p4_p9gsun.webp",
    city: "Italy",
    rating: "5.0",
    text: "Plan A Trip To Nashville with a Local Insider",
    price: "984",
    id: "4"
  },
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708593/p5_cwaixi.webp",
    city: "United states",
    rating: "5.0",
    text: "Plan the perfect trip to sunny Miami",
    price: "1,772",
    id: "5"
  },
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708603/p6_kukjk5.webp",
    city: "United states",
    rating: "4.68",
    text: "Plan the perfect New York Vacation",
    price: "1,558",
    id: "7"
  },
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708620/p7_winpqw.webp",
    city: "Spain",
    rating: "5.0",
    text: "Design your trip to Barcelona with Gemma",
    price: "3,102",
    id: "8"
  },
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708626/p8_vjmlnh.webp",
    city: "South Korea",
    rating: "4.97",
    text: "Craft a custom trip to Korea With Jay",
    price: "3,504",
    id: "9"
  },
  {
    url:
      "https://res.cloudinary.com/dyhkn8frb/image/upload/v1667708641/p9_gbz02t.webp",
    city: "South Korea",
    rating: "5.0",
    text: "Plan a venture Venice with Giulia",
    price: "2,449",
    id: "6"
  }
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="items-container">
        <Slider {...settings}>
          {cardData.map((each) => {
            const { id, url, text, price, city, rating } = each;
            return (
              <div className="item-container" key={id}>
                <img src={url} alt="" className="image" />
                <div>
                  <div className="rating">
                    <AiFillStar size={20} />
                    <p className="item-para">
                      {rating} {city}{" "}
                    </p>
                  </div>
                  <p className="item-para">{text}</p>
                  <p className="item-para">FROM {price} /person</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
