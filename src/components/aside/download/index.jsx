import React, { Component } from 'react'
import AsideHeader from '../aside-header'
import downloadImg from './二维码'
import './index.css'

export default class Download extends Component {
  render() {
    return (
      <div className="download">
        <AsideHeader>客户端二维码</AsideHeader>
        <div className="download-inner">
          <img
          src={downloadImg}
            alt="" />
          <a href="https://github.com/soliury/noder-react-native">客户端源码地址</a>
        </div>
      </div>
    )
  }
}
