"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import _1 from "../../public/adminUi/products/11-inch-ipad-pro-512gb-space-gray.png";
import _2 from "../../public/adminUi/products/13-inch-macbokk-air-256gb-space-gray.png";
import _3 from "../../public/adminUi/products/14-inch-macbook-pro-12-core-1tb-space-black.png";
import _4 from "../../public/adminUi/products/15-inch-macbook-air-2tb-midnight.png";
import _5 from "../../public/adminUi/products/airpods-max.png";
import _6 from "../../public/adminUi/products/airpods-pro-2nd-generation.png";
import _7 from "../../public/adminUi/products/apple-ipad-air-256gb-purple.png";
import _8 from "../../public/adminUi/products/apple-iphone-14-128gb-blue.png";
import _9 from "../../public/adminUi/products/apple-iphone-15-pro-1tb-blue-titanium.png";
import _10 from "../../public/adminUi/products/apple-iphone-15-pro-max-256gb-natural-titanium.png";
import _11 from "../../public/adminUi/products/apple-pencil-1st-generation.png";
import _12 from "../../public/adminUi/products/apple-tv-4k-wifi.png";
import _13 from "../../public/adminUi/products/apple-watch-series-9-aluminum.png";
import _14 from "../../public/adminUi/products/apple-watch-ultra-2.png";
import _15 from "../../public/adminUi/products/silver-lamicall-adjustable-laptop-riser.png";
import Image from "next/image";
const data = [
  {
    image: _1,
    title: "11-inch-ipad-pro-512gb-space-gray".split("-").join(" "),
    subtitle: "11-inch-ipad-pro-512gb-space-gray".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _2,
    title: "11-inch-ipad-pro-512gb-space-gray".split("-").join(" "),
    subtitle: "11-inch-ipad-pro-512gb-space-gray".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _3,
    title: "14-inch-macbook-pro-12-core-1tb-space-black".split("-").join(" "),
    subtitle: "14-inch-macbook-pro-12-core-1tb-space-black"
      .split("-")
      .join(" "),
    price: "$1,099.00",
  },
  {
    image: _4,
    title: "15-inch-macbook-air-2tb-midnight".split("-").join(" "),
    subtitle: "15-inch-macbook-air-2tb-midnight".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _5,
    title: "airpods-max".split("-").join(" "),
    subtitle: "airpods-max".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _6,
    title: "airpods-pro-2nd-generation".split("-").join(" "),
    subtitle: "airpods-pro-2nd-generation".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _7,
    title: "apple-ipad-air-256gb-purple".split("-").join(" "),
    subtitle: "apple-ipad-air-256gb-purple".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _8,
    title: "apple-iphone-14-128gb-blue".split("-").join(" "),
    subtitle: "apple-iphone-14-128gb-blue".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _9,
    title: "apple-iphone-15-pro-1tb-blue-titanium".split("-").join(" "),
    subtitle: "apple-iphone-15-pro-1tb-blue-titanium".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _10,
    title: "apple-iphone-15-pro-max-256gb-natural-titanium"
      .split("-")
      .join(" "),
    subtitle: "apple-iphone-15-pro-max-256gb-natural-titanium"
      .split("-")
      .join(" "),
    price: "$1,099.00",
  },
  {
    image: _11,
    title: "apple-pencil-1st-generation".split("-").join(" "),
    subtitle: "apple-pencil-1st-generation".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _12,
    title: "apple-tv-4k-wifi".split("-").join(" "),
    subtitle: "apple-tv-4k-wifi".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _13,
    title: "apple-watch-series-9-aluminum".split("-").join(" "),
    subtitle: "apple-watch-series-9-aluminum".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _14,
    title: "apple-watch-ultra-2".split("-").join(" "),
    subtitle: "apple-watch-ultra-2".split("-").join(" "),
    price: "$1,099.00",
  },
  {
    image: _15,
    title: "silver-lamicall-adjustable-laptop-riser".split("-").join(" "),
    subtitle: "silver-lamicall-adjustable-laptop-riser".split("-").join(" "),
    price: "$1,099.00",
  },
];
export default class MultipleItems extends Component {
  render() {
    // medium and large devices settings
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    // small devices settings
    const smSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div>
        {/* md devices and upwards */}
        <div className="md:block hidden">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[calc((33%-2rem)/3)] mb-6 px-2 cursor-pointer"
              >
                <div className="p-2 bg-[#f2f2f2]">
                  <div
                    style={{ backgroundImage: `url(${item.image.src})` }}
                    className={`img-container bg-center bg-no-repeat bg-contain w-full min-h-[25vh] relative`}
                  ></div>
                </div>
                <h3 className="font-bold mt-1 mb-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full ">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4b4b4b] whitespace-nowrap overflow-hidden text-ellipsis max-w-full ">
                  {item.subtitle}
                </p>
                <p className="text-sm text-maingold">{item.price}</p>
              </div>
            ))}
          </Slider>
        </div>
        {/* mobiles and small devices */}
        <div className="md:hidden block">
          <Slider {...smSettings}>
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[calc((33%-2rem)/3)] mb-6 px-2 cursor-pointer"
              >
                <div className="p-2 bg-[#f2f2f2]">
                  <div
                    style={{ backgroundImage: `url(${item.image.src})` }}
                    className={`img-container bg-center bg-no-repeat bg-contain w-full min-h-[25vh] relative`}
                  ></div>
                </div>
                <h3 className="font-bold mt-1 mb-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full ">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4b4b4b] whitespace-nowrap overflow-hidden text-ellipsis max-w-full ">
                  {item.subtitle}
                </p>
                <p className="text-sm text-maingold">{item.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
