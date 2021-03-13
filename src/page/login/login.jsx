import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import About from "../../components/aside/about/index.jsx";
import "../../components/aside/index.css";

export default class Index extends Component {
  render() {
    return (
      <article>
        <section>
          <div id="main">
            <div className="main-nav">
              <div className="main-freshmannav nav-active">
                <Link to="/index">主页</Link>/&nbsp;&nbsp;登录
              </div>
            </div>
            <div className="main-freshmancontent content-active">
              <form className="form1">
                <div className="form-text">
                  <div>
                    <label htmlFor="signIn">用户名</label>
                    <input type="text" id="signIn" name="signIn" />
                  </div>
                  <div>
                    <label htmlFor="inpassword">密码</label>
                    <input type="password" id="inpassword" name="inpassword" />
                  </div>
                </div>
                <div className="form-btn">
                  <a href="#" className="sign-up sign-in">
                    登录
                  </a>
                  <a
                    href="https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9"
                    className="sign-up"
                  >
                    通过&nbsp;&nbsp;GitHub&nbsp;&nbsp;登录
                  </a>
                  <Link to="/search-pass">
                    <span className="span-special">忘记密码了?</span>
                  </Link>
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
