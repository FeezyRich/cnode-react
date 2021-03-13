import React, { Component } from "react";
import "./index.css";
import regist1 from "./image/regist-codejsLogo.jpeg";
import regist2 from "./image/regist-favicon.svg";
import regist3 from "./image/regist-userPhoto.jpeg";
import regist4 from "./image/regist-global.png";
import regist5 from "./image/regist-qustion.png";
import regist6 from "./image/regist-ban.png";
import regist7 from "./image/regist-time.png";
import regist8 from "./image/regist-house.png";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.show = this.show.bind(this);
  }

  show = () => {
    const { isShow } = this.state;
    this.setState({ isShow: !isShow });
  };
  componentDidMount() {
    document.body.style.backgroundColor = "#fff";
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = "#e1e1e1";
  }
  render() {
    return (
      <div id="all">
        <div id="header">
          <div className="header-nodejs-logo">
            <img src={regist1} alt="" />
          </div>
          <div className="header-connect">
            ----
            <div className="ok">✓</div>
            ----
          </div>
          <div className="header-github-logo">
            <img src={regist2} alt="" />
          </div>
        </div>
        <div id="title">Authorize cnode</div>
        <div id="content">
          <div className="content-item">
            <img src={regist3} alt="" />
            <p>
              cnode by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/fengmk2"
              >
                fengmk2
              </a>
            </p>
            <p>wants to access your urnotzzh account</p>
          </div>
          <div className="content-item">
            <img src={regist4} alt="" />
            <p>Public data only</p>
            <p>Limited access to your public data</p> &nbsp;
            <input
              type="button"
              value="..."
              id="show-btn"
              onClick={this.show}
            />
            <div
              id="content-show"
              style={{ display: this.state.isShow ? "block" : "none" }}
            >
              <p className="show-p">
                This application will be able to identify you and read public
                information.
              </p>
              <img className="show-img" src={regist5} alt="" />
              <a className="show-a" href="">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div id="btns">
          <button className="cancel">Cancel</button>
          <button className="authorize">Authorize fengmk2</button>
          <p>Authorizing will redirect to</p>
          <p>
            <b>https://cnodejs.org</b>
          </p>
        </div>

        <div id="list">
          <div>
            <img src={regist6} alt="" />
            <p>
              <b>Not</b>owned or <br /> operated by GitHub
            </p>
          </div>
          <div>
            <img src={regist7} alt="" />
            <p>
              Created <br /> <b>8 years ago</b>
            </p>
          </div>
          <div>
            <img src={regist8} alt="" />
            <p>
              <b>More than 1K</b>
              <br /> GitHub users
            </p>
          </div>
        </div>

        <div id="footer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/authorizing-oauth-apps"
          >
            Learn more about OAuth
          </a>
        </div>
      </div>
    );
  }
}
