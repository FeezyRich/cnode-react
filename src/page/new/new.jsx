import React, { Component } from "react";
import New from "./main-new";
import Login from "../../components/aside/login";
import Connect from "../../components/aside/connect";
import Download from "../../components/aside/download";
import "../../components/aside/index.css";

export default class Index extends Component {
  render() {
    return (
      <article>
        <section>
          <New />
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
