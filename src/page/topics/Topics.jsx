import React, { Component } from "react";
import PropTypes from "prop-types";
import store from "../../store";
import UserTopics from "./collectRecTopics";
import Author from "../../components/aside/author";
import Connect from "../../components/aside/connect";
import Download from "../../components/aside/download";
export default class User extends Component {
  static propTypes = {
    match: PropTypes.any,
  };
  componentDidMount() {
    let data = this.props.match.params;
    store.getUserDetile(data.userName, data.tab);
  }
  render() {
    let {match} = this.props;
    return (
      <article>
        <section>
          <div id="main">
            <UserTopics match={match} />
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
