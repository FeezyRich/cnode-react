import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './index.css'

export default class Login extends Component {
  render() {
    return (
      <div className="reg">
        <p>CNode：Node.js专业中文社区</p>
        <div className="reg-wrapper">
          <p>您可以
          <NavLink to="/login">登录</NavLink>
          或
          <NavLink
              to="/regist">注册</NavLink>，也可以
          </p>
          <a href="https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
            className='sign-up'>通过&nbsp;&nbsp;GitHub&nbsp;&nbsp;登录</a>
        </div>
      </div>
    )
  }
}
