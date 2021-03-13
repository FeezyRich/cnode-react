import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import store from "../../store";
@observer
export default class TitleInvi extends Component {
  static propTypes = {
    text: PropTypes.any,
    inviMessage: PropTypes.any,
  };
  get _tab() {
    let data = this.props.inviMessage;
    let tab;
    if (data.top) {
      tab = "置顶";
    } else if (data.good) {
      tab = "精华";
    } else if (data.tab === "ask") {
      tab = "问答";
    } else if (data.tab === "share") {
      tab = "分享";
    } else {
      tab = "";
    }
    return tab;
  }
  get __tab() {
    let tabName;
    if (this._tab) {
      if (this._tab === "置顶" || this._tab === "精华") {
        tabName = "impo";
      } else {
        tabName = "ordin";
      }
    } else tabName = "";
    return tabName;
  }
  render() {
    if (this.props.text) {
      //在用户界面最近参与或者最近创建中作者可能无话题
      return (
        <div className={"main-content content-hover"}>{this.props.text}</div>
      );
    }
    let data = this.props.inviMessage;
    return (
      <div className={"main-content content-hover"}>
        <div className={"main-left"}>
          <NavLink
            to={`/user/${data.author.loginname}`}
            title={data.author.loginname}
          >
            <img src={data.author.avatar_url} className="user-img" />
          </NavLink>
          <div className="main-text">
            <div className="main-text-left">
              <span className="comment">{data.reply_count}</span>/
              <span className="view">{data.visit_count}</span>
            </div>
            <div className="main-text-right">
              <span className={this.__tab}>{this._tab}</span>
              <NavLink
                id={data.id}
                to={`/detile/${data.id}/${data.author.loginname}`}
                title={data.title}
                className="inviCapture"
              >
                {data.title}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="main-right">
          <NavLink to={`/detile/${data.id}`}>
            <img src={data.author.avatar_url} className="user-imgSmall" />
            <span className="time">
              {store.getDate(data.create_at || data.last_reply_at) + "前"}
            </span>
          </NavLink>
        </div>
      </div>
    );
  }
}
