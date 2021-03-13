import React, { Component } from "react";
import PropTypes from "prop-types";
import footerImg1 from "./footer_01.png";
import footerImg2 from "./footer_02.png";
import "./index.css";
export default class Footer extends Component {
  static propTypes = {
    history: PropTypes.any,
  };
  render() {
    if (this.props.history.location.pathname == "/regist") {
      return null;
    }
    return (
      <footer>
        <div className="footer-wrapper1">
          <div className="footer-wrapper2">
            <div className="foot-header">
              <a href="https://cnodejs.org/rss">RSS</a>&nbsp;|&nbsp;
              <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
            </div>
            <p>
              CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
              的技术研究。
            </p>
            <p>
              服务器搭建在
              <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">
                <img src={footerImg1} alt="" />
              </a>
              ，存储赞助商为
              <a href="https://www.qiniu.com/?ref=cnode">
                <img src={footerImg2} alt="" />
              </a>
            </p>
            <p>
              新手搭建 Node.js 服务器，推荐使用无需备案的
              <a
                href="https://www.digitalocean.com/?refcode=eba02656eeb3"
                className="footer"
              >
                DigitalOcean(https://www.digitalocean.com/)
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
