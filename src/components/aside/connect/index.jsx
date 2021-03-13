import React, { Component } from "react";
import AsideHeader from "../aside-header";
import connectImg1 from "./image/home-connect_01.png";
import connectImg2 from "./image/home-connect_02.png";
import connectImg3 from "./image/home-connect_03.png";
import "./index.css";
let data = [
  {
    aHref: "https://ruby-china.org/",
    imgSrc: connectImg1,
  },
  {
    aHref: "https://golangtc.com/",
    imgSrc: connectImg2,
  },
  {
    aHref: "https://learnku.com/laravel",
    imgSrc: connectImg3,
  },
];
export default class Connect extends Component {
  render() {
    return (
      <div className="connect">
        <AsideHeader>友情社区</AsideHeader>
        <div className="connect-inner">
          {data.map((item, index) => (
            <a href={item.aHref} key={index}>
              <img src={item.imgSrc} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}
