import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import logoImg from "./logo.svg";

export default class LeftNav extends Component {
  render() {
    return (
      <div className="nav-rightContent">
        <NavLink to="/index">
          <img src={logoImg} alt="" />
        </NavLink>
        <div className="nav-search">
          <input
            type="text"
            onKeyUp={(e) => {
              if (e.which == 13) {
                location.href = "https://www.baidu.com/s?wd=" + e.target.value;
              }
            }}
          />
        </div>
      </div>
    );
  }
}
