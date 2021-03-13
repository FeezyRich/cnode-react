import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";

export default class RightNav extends Component {
  static propTypes = {
    data: PropTypes.array,
  };
  render() {
    return (
      <div className="nav-leftContent">
        <ul>
          {this.props.data.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                activeStyle={{
                  color: "#fff",
                }}
              >
                {item.page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
