import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import store from "../../store";
import TitleInvi from "../../components/main/everyContent";
@observer
class RecentTopic extends Component {
  static propTypes = {
    classType: PropTypes.any,
    data: PropTypes.any,
  };
  render() {
    return (
      <div className={"ignore " + this.props.classType}>
        <div className="header">
          最近{this.props.classType === "extend" ? "参与" : "创建"}的话题
        </div>
        <div className={this.props.classType + "-content"}>
          {this.props.data.length == 0 ? (
            <TitleInvi text={"作者最近无话题"} />
          ) : (
            <>
              {this.props.data.map((ele, index) => {
                if (index < 7) {
                  return <TitleInvi inviMessage={{ ...ele }} key={index + 1} />;
                } 
              })}
              <NavLink
                to={
                  "/Topics/" +
                  this.props.classType +
                  "/" +
                  store.Userdetile.loginname
                }
                className="lastA"
              >
                查看更多{">>"}
              </NavLink>
            </>
          )}
        </div>
      </div>
    );
  }
}
@observer
export default class user extends Component {
  render() {
    window.scroll(0, 0);
    if (!store.UserdetileFlag) {
      return <div>加载中</div>;
    }
    return (
      <>
        <div id="main-userMessage">
          <div className="author-message">
            <NavLink to="#">
              <img src={store.Userdetile.avatar_url} alt="" />
              {store.Userdetile.loginname}
            </NavLink>
            <div className="range-score">
              {store.Userdetile.score + "个积分"}
            </div>
            <div className="author-collect">
              {store.Userdetile.collectCount != 0 ? (
                <NavLink to={"/Topics/collect/" + store.Userdetile.loginname}>
                  {store.Userdetile.collectCount + "个话题收藏"}
                </NavLink>
              ) : (
                <a>{"0个话题收藏"}</a>
              )}
            </div>
            <div className="author-allMessage">
              <ul>
                <li>
                  <span className="iconfont">&#xe625;</span>
                  <a href={`${store.Userdetile.avatar_url}`}>
                    http://{store.Userdetile.loginname}.com
                  </a>
                </li>
                <li>
                  <span className="iconfont">&#xe645;</span>北京
                </li>
                <li>
                  <span className="iconfont">&#xe604;</span>
                  <a>{store.Userdetile.loginname}</a>
                </li>
                <li>
                  <span className="iconfont">&#xe603;</span>shit微博
                </li>
              </ul>
              <span>注册时间{store.getDate(store.Userdetile.create_at)}前</span>
            </div>
          </div>
        </div>
        <RecentTopic
          classType="create"
          data={store.handleRecentTopics(store.Userdetile.recent_topics)}
        />
        <RecentTopic
          classType="extend"
          data={store.handleRecentTopics(store.Userdetile.recent_replies)}
        />
      </>
    );
  }
}
