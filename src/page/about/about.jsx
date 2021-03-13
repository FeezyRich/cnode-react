import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Login from "../../components/aside/login";
import Connect from "../../components/aside/connect";
import Download from "../../components/aside/download";
import "../../components/aside/index.css";

export default class Index extends Component {
  render() {
    return (
      <article>
        <section>
          <div id="main">
            <div className="main-nav">
              <div className="main-freshmannav">
                <Link to="/index">主页</Link>/&nbsp;&nbsp;关于
              </div>
            </div>
            <div className="main-freshmancontent">
              <div className="about-text">
                <h3>关于</h3>
                <p>
                  CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于
                  Node.js 的技术研究。
                </p>
                <p>
                  CNode 社区由一批热爱 Node.js
                  技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对
                  Node.js 感兴趣的朋友。
                </p>
                <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p>
                  社区目前由{" "}
                  <a
                    href="./user.html?author=alsotang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @alsotang
                  </a>{" "}
                  在维护，有问题请联系：
                  <a
                    href="https://github.com/alsotang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/alsotang
                  </a>
                </p>
                <p>
                  请关注我们的官方微博：
                  <a
                    href="http://weibo.com/cnodejs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://weibo.com/cnodejs
                  </a>
                </p>
                <h3>移动客户端</h3>
                <p>
                  客户端由{" "}
                  <a
                    href="./user.html?author=soliury"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @soliury
                  </a>{" "}
                  开发维护。
                </p>
                <p>
                  源码地址：{" "}
                  <a
                    href="https://github.com/soliury/noder-react-native"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/soliury/noder-react-native
                  </a>{" "}
                  。
                </p>
                <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
                <p>
                  另，安卓用户同时可选择：
                  <a
                    href="https://github.com/TakWolf/CNode-Material-Design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/TakWolf/CNode-Material-Design
                  </a>{" "}
                  ，这是 Java 原生开发的安卓客户端。
                </p>
              </div>
            </div>
          </div>

          <aside>
            <Login />
            <Connect />
            <Download />
          </aside>
        </section>
      </article>
    );
  }
}
