import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import store from "../../../store";
import "./invi.css";
@observer
class InviComment extends Component {
  static propTypes = {
    data: PropTypes.any,
    index: PropTypes.any,
  };
  render() {
    return (
      <li>
        <ul className="ulFace">
          <li>
            <NavLink to={`/user/${this.props.data.author.loginname}`}>
              <img src={this.props.data.author.avatar_url} alt="" />
            </NavLink>
          </li>
          <li>
            <p>
              <NavLink
                to={`/user/${this.props.data.author.loginname}`}
                className="comment-user"
              >
                {this.props.data.author.loginname}
              </NavLink>
              <a className="comment-time">
                {this.props.index + 1}楼·
                {store.getDate(this.props.data.create_at)}前
              </a>
            </p>
            <p
              className="comment"
              dangerouslySetInnerHTML={{ __html: this.props.data.content }}
            ></p>
          </li>
        </ul>
      </li>
    );
  }
}
@observer
export default class InviDetile extends Component {
  render() {
    let tabObj = {
      ask: "问答",
      share: "分享",
      job: "招聘",
      dev: "客户端测试",
    };
    window.scroll(0, 0);
    if (!store.detileFlag) {
      return <div>加载中</div>;
    } else {
      return (
        <div id="main" className="invi">
          <div className="invi-wrapper">
            <div className="invi-header">
              <span className="invi-title">{store.detile.title}</span>
              <div className="invi-author">
                <span>
                  发布于&nbsp;{store.getDate(store.detile.create_at)}&nbsp;前
                </span>
                <span>
                  作者&nbsp;
                  <NavLink to={`/user/${store.detile.author.loginname}`}>
                    {store.detile.author.loginname}
                  </NavLink>
                </span>
                <span>{store.detile.visit_count}&nbsp;次浏览</span>
                <span>
                  来自&nbsp;
                  {tabObj[store.detile.tab]}
                </span>
              </div>
            </div>
            <div className="main-freshmancontent">
              <div
                className="invi-content"
                dangerouslySetInnerHTML={{ __html: store.detile.content }}
              ></div>
            </div>
          </div>
          <div className="invi-comment">
            <div className="comment-num header">
              <span>{store.detile.reply_count}</span>&nbsp;回复
            </div>
            <div className="comment-inner">
              <ul className="notsame">
                {store.detile.replies.map((ele, index) => {
                  return (
                    <InviComment data={ele} index={index} key={index + 1} />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
