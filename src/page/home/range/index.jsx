import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AsideHeader from "../../../components/aside/aside-header";
import "./index.css";

export default class Range extends Component {
  static propTypes = {
    data: PropTypes.array,
  };
  render() {
    return (
      <div className="range">
        <AsideHeader>
          积分榜&nbsp;&nbsp;<a>TOP&nbsp;100&nbsp;{">>"}</a>
        </AsideHeader>
        <div className="range-inner">
          <ul>
            {this.props.data.map((item, index) => (
              <li key={index}>
                <span>{item.score}</span>
                <Link to={`/user/${item.user}`}>{item.user}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
