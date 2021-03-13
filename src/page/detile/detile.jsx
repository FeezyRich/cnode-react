import PropTypes from "prop-types";
import React, { Component } from "react";
import store from '../../store'
import InviDetile from "./invi-detile/inviDetile";
import Author from "../../components/aside/author/index.jsx";
import Other from "./other";
import Ignore from "../../components/aside/ignore";

export default class Detile extends Component {
  static propTypes = {
    history: PropTypes.any,
    match:PropTypes.any,
    location:PropTypes.any
  };
  componentDidMount() {
    let { userName, id } = this.props.match.params;
    store.getArticleDetile(id,userName);
    store.getIndexMessage();
    let obj ={tab:'all',page:1};
    Object.assign(store,obj);
  }
  componentDidUpdate(prevProps) {
    const { userName, id } = this.props.match.params;
    let  location  = prevProps.location;
    if (this.props.location.pathname !== location.pathname) {
      store.getArticleDetile(id,userName);
    }
  }
  render() {
    return (
      <article>
        <section>
          <InviDetile/>
          <aside>
            <Author />
            <Other />
            <Ignore />
          </aside>
        </section>
      </article>
    );
  }
}
