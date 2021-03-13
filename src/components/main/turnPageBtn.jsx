import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import store from "../../store";
class LastNextBtn extends Component {
  static propTypes = {
    num: PropTypes.number,
    length: PropTypes.number,
    classname: PropTypes.string,
    innerhtml: PropTypes.string,
  };
  goBackPage = (num, ArrLength) => {
    if (num === -1 && store.page === 1) {
      return;
    } else {
      if (ArrLength) {
        if (num == +1 && store.page == ArrLength) {
          return;
        } else {
          store.page += num;
        }
      } else {
        store.page += num;
        store.getIndexMessage("/topics");
      }
    }
  };
  render() {
    let { num, length, classname, innerhtml } = this.props;
    return (
      <button
        onClick={() => this.goBackPage(num, length)}
        className={classname}
      >
        {innerhtml}
      </button>
    );
  }
}

@observer
export default class TurnPageBtn extends Component {
  static propTypes = {
    len: PropTypes.any,
  };
  goPage = (page) => {
    if (store.page == page) {
      return;
    }
    store.page = page;
    if (this.props.len) {
      return;
    }
    store.getIndexMessage("/topics");
  };
  get _len() {
    return this.props.len.map((ele, index) => {
      return (
        <button
          className={store.page === index + 1 ? "active" : ""}
          onClick={() => this.goPage(index + 1)}
          key={index + 1}
        >
          {index + 1}
        </button>
      );
    });
  }
  render() {
    if (this.props.len) {
      return (
        <div id="turnPage-btn">
          <LastNextBtn
            num={-1}
            length={this.props.len.length}
            classname="first-btn"
            innerhtml={"<<"}
          />
          {this._len}
          <LastNextBtn
            num={1}
            length={this.props.len.length}
            classname="last-btn"
            innerhtml={">>"}
          />
        </div>
      );
    }
    return (
      <div id="turnPage-btn">
        <LastNextBtn num={-1} classname="first-btn" innerhtml={"<<"} />
        {store.page - 2 > 1 ? <button>{"..."}</button> : ""}
        {store.page <= 3
          ? [1, 2, 3, 4, 5].map((ele) => (
              <button
                className={store.page === ele ? "active" : ""}
                onClick={() => this.goPage(ele)}
                key={ele}
              >
                {ele}
              </button>
            ))
          : [
              store.page - 2,
              store.page - 1,
              store.page,
              store.page + 1,
              store.page + 2,
            ].map((ele) => (
              <button
                className={store.page === ele ? "active" : ""}
                onClick={() => this.goPage(ele)}
                key={ele}
              >
                {ele}
              </button>
            ))}
        <button>{"..."}</button>
        <LastNextBtn num={1} classname="last-btn" innerhtml={">>"} />
      </div>
    );
  }
}
