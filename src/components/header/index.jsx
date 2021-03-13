import React from 'react'
import PropTypes from 'prop-types'
import LeftNav from './left-nav'
import RightNav from './right-nav'
import './index.css'
let data = [
  { page: "首页", to: "/index" },
  { page: "新手入门", to: "/new" },
  { page: "API", to: "/api" },
  { page: "关于", to: "/about" },
  { page: "注册", to: "/regist" },
  { page: "登录", to: "/login" },
];
export default class IndexNav extends React.Component {
  static propTypes = {
    history: PropTypes.any,
  }
  render() {
    if(this.props.history.location.pathname == '/regist'){
      return null
    }
    return (
      <header>
        <div className="nav">
          <div id="nav-wrapper">
            <LeftNav />
            <RightNav data={data}/>
          </div>
        </div>
      </header>
    )
  }
}