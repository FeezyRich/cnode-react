import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import store from "../../../store";
import TitleInvi from "../../../components/main/everyContent";
import TurnPageBtn from "../../../components/main/turnPageBtn";
import "./main.css";
@observer
export default class mainInvi extends Component {
  static propTypes = {
    data: PropTypes.array,
  };
  changeTab = (type) => {
    if (type === store.tab) {
      return;
    }
    store.page = 1;
    store.tab = type;
    store.getIndexMessage();
  };

  render() {
    window.scroll(0, 0);
    return (
      <>
        <div id="main">
          <div id="home-nav" className="main-nav">
            {this.props.data.map((item, index) => {
              return (
                <span
                  className={store.tab === item["data-id"] ? "active" : ""}
                  data-id={item["data-id"]}
                  key={index + 1}
                  onClick={() => this.changeTab(item["data-id"])}
                >
                  {item["text"]}
                </span>
              );
            })}
          </div>
          <div className="main-wrapper" id="home">
            {store.listFlag == 0 ? (
              <div>Loading</div>
            ) : (
              store.list.map((ele, index) => {
                return <TitleInvi inviMessage={{ ...ele }} key={index + 1} />;
              })
            )}
          </div>
          <TurnPageBtn />
        </div>
      </>
    );
  }
}
