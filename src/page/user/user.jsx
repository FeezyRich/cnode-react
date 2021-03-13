import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import store from '../../store'
import PropTypes from "prop-types";
import UserMessage from "./userMessage";
import Author from "../../components/aside/author/index.jsx";
import Connect from "../../components/aside/connect";
import Download from "../../components/aside/download";
export default class User extends Component {
  static propTypes = {
    history: PropTypes.any,
    match:PropTypes.any,
    location:PropTypes.any
  };
  componentDidUpdate(prevProps) {
    const { userName} = this.props.match.params;
    let  location  = prevProps.location;
    if (this.props.location.pathname !== location.pathname) {
      store.getUserDetile(userName);
    }
  }
  componentDidMount() {
    let data = this.props.match.params;
    let obj ={tab:'all',page:1};
    Object.assign(store,obj);

    store.getUserDetile(data.userName);
  }
  render() {
    return (
      <article>
        <section>
          <div id="main" className="invi">
            <div className="main-nav">
              <div className="main-freshmannav">
                <NavLink to="/index">主页</NavLink>/
              </div>
            </div>
            <UserMessage/>
          </div>
          <aside>
            <Author used={"user"} />
            <Connect />
            <Download />
          </aside>
        </section>
      </article>
    );
  }
}
