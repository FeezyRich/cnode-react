import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import store from "../../../store";
import AsideHeader from "../aside-header";
import "./index.css";

function AuthorContent(props) {
  let data = props.data;
  console.log(data.score);
  return (
    <div className="author">
      <AsideHeader>作者</AsideHeader>
      <div className="author-inner">
        <div className="author-message">
          <NavLink to={`/user/${data.loginname}`}>
            <img src={data.avatar_url} alt="" />
            {data.loginname}
          </NavLink>
        </div>
        <div className="range-score">积分：{data.score}</div>
        <em>{'"这家伙很懒，什么个性签名都没有留下。"'}</em>
      </div>
    </div>
  );
}
AuthorContent.propTypes = {
  data: PropTypes.object,
};
@observer
export default class Author extends Component {
  static propTypes = {
    used: PropTypes.string,
  };
  render() {
    if (this.props.used == "user") {
      if (!store.UserdetileFlag) {
        return <div>加载中</div>;
      }
      return <AuthorContent data={store.Userdetile} />;
    } else {
      if (!store.detileFlag) {
        return <div>加载中</div>;
      }
      return <AuthorContent data={store.detile.author} />;
    }
  }
}
