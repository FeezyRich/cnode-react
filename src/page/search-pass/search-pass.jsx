import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import About from "../../components/aside/about";
import "../../components/aside/index.css";

export default class Index extends Component {
  render() {
    return (
      <article>
        <section>
          <div id="main">
            <div className="main-nav">
              <div className="main-freshmannav nav-active">
                <Link to="/index">主页</Link>/&nbsp;&nbsp;找回密码
              </div>
            </div>
            <div className="main-freshmancontent">
              <form className="form2">
                <div className="form-text">
                  <div>
                    <label htmlFor="email">电子邮箱</label>
                    <input type="text" id="email" name="email" />
                  </div>
                  <div>请输入您注册帐户时使用的电子邮箱</div>
                </div>
                <div className="form-btn">
                  <a href="#" className="sign-up signUp">
                    提交
                  </a>
                </div>
              </form>
            </div>
          </div>

          <aside>
            <About />
          </aside>
        </section>
      </article>
    );
  }
}
