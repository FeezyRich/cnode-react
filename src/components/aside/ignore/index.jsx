import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import AsideHeader from "../aside-header";
import { observer } from "mobx-react";
import store from "../../../store";
import "./index.css";
@observer
class Ignore extends Component {
  static propTypes = {
    history: PropTypes.any,
  };

  get _list() {
    if (store.listFlag == 0) {
      return <div>Loading</div>;
    }
    return store.list
      .filter((ele) => {
        return ele.reply_count == 0;
      })
      .map((ele, index) => {
        if (index < 6) {
          return (
            <NavLink
              to={`/detile/${ele.id}/${ele.author.loginname}`}
              title={ele.author.loginname}
              key={ele.id}
            >
              {ele.title}
            </NavLink>
          );
        }
      });
  }
  render() {
    return (
      <div className="ignore">
        <AsideHeader>无人回复的话题</AsideHeader>
        <div className="ignore-inner">{this._list}</div>
      </div>
    );
  }
}

export default Ignore;
