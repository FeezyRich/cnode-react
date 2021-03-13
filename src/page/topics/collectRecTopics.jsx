import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import TitleInvi from "../../components/main/everyContent";
import TurnPageBtn from "../../components/main/turnPageBtn";
import store from "../../store";
@observer
class TopcisHeader extends Component {
  static propTypes = {
    tab: PropTypes.any,
    userName: PropTypes.any,
  };
  render() {
    return (
      <div className="main-nav">
        <div className="main-freshmannav">
          <NavLink to="/index">主页</NavLink>/&nbsp;&nbsp;
          {this.props.tab === "collect"
            ? this.props.userName + "的个人收藏"
            : this.props.userName + "的个人主页"}
        </div>
      </div>
    );
  }
}
@observer
export default class UserTopics extends Component {
  static propTypes = {
    match: PropTypes.any,
  };
  tabData(data) {
    if (data.length > 40) {
      return store.dataDistribute(data)[store.page - 1].map((ele, index) => {
        return <TitleInvi inviMessage={{ ...ele }} key={index + 1} />;
      });
    } else {
      return data.map((ele, index) => {
        return <TitleInvi inviMessage={{ ...ele }} key={index + 1} />;
      });
    }
  }
  get _tabInvi() {
    let tab = this.props.match.params.tab;
    if (tab === "collect") {
      return (
        <>
          <div className="main-wrapper">{this.tabData(store.UserCollect)}</div>
          <TurnPageBtn len={store.dataDistribute(store.UserCollect)} />
        </>
      );
    } else if (tab === "create") {
      return (
        <>
          <div className="main-wrapper">{this.tabData(store.handleRecentTopics(store.Userdetile.recent_topics))}</div>
          <TurnPageBtn len={store.dataDistribute(store.Userdetile.recent_topics)}/>
        </>
      );
    } else if (tab === "extend") {
      return (
        <>
          <div className="main-wrapper">{this.tabData(store.handleRecentTopics(store.Userdetile.recent_replies))}</div>
          <TurnPageBtn len={store.dataDistribute(store.Userdetile.recent_topics)}/>
        </>
      );
    }
  }
  render() {
    window.scroll(0, 0);
    if (!store.UserdetileFlag) {
      return <div>加载中</div>;
    }
    return (
      <>
        <TopcisHeader tab={this.props.match.params.tab} userName={store.Userdetile.loginname} />
        {this._tabInvi}
      </>
    );
  }
}
