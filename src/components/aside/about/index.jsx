import React, { Component } from 'react'
import AsideHeader from '../aside-header'
import './index.css'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <AsideHeader>关于</AsideHeader>
        <div className="about-inner">
          <p>CNode：Node.js专业中文社区</p>
          <p>在这里你可以：</p>
          <ul>
            <li>向别人提出你遇到的问题</li>
            <li>帮助遇到问题的人</li>
            <li>分享自己的知识</li>
            <li>和其它人一起进步</li>
          </ul>
        </div>
      </div>
    )
  }
}
