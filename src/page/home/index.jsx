import React, { Component } from "react";
import { observer } from "mobx-react";
import MainInvi from "./main-invi/mainInvi";
import Login from "../../components/aside/login";
import Ignore from "../../components/aside/ignore";
import Range from "./range";
import store from "../../store";
import Connect from "../../components/aside/connect";
import Download from "../../components/aside/download";
import "../../components/aside/index.css";
let dataRange = [
  { user: "i5ting", score: 22530 },
  { user: "alsotang", score: 15840 },
  { user: "atian25", score: 9990 },
  { user: "leapon", score: 9350 },
  { user: "jiyinyiyong", score: 8780 },
  { user: "yakczh", score: 7590 },
  { user: "im-here", score: 6855 },
  { user: "DevinXian", score: 6125 },
  { user: "chapgaga", score: 5815 },
  { user: "magicdawn", score: 5375 },
];
let dataNav=[
  { "data-id": "all", text: "全部" },
  { "data-id": "good", text: "精华" },
  { "data-id": "share", text: "分享" },
  { "data-id": "ask", text: "问答" },
  { "data-id": "job", text: "招聘" },
  { "data-id": "dev", text: "客户端测试" },
];
@observer
export default class Index extends Component {
  componentDidMount() {
    store.page = 1;
    store.getIndexMessage('home');
  }
  render() {
    return (
      <article>
        <section>
          <MainInvi data={dataNav}/>
          <aside>
            <Login />
            <Ignore />
            <Range data={dataRange} />
            <Connect />
            <Download />
          </aside>
        </section>
      </article>
    );
  }
}
