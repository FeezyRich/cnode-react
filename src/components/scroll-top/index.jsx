import React, { Component } from 'react'
import './index.css'

export default class ScrollTop extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true)
  }

  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  }

  handleScroll() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({ show: scrollTop > 200 ? true : false })
  }

  backTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  render() {
    const { show } = this.state
    return (
      <div id="to-top"
        className={show ? "totop-block" : "totop-none"}
        onClick={this.backTop}
      >回到顶部</div>
    )
  }
}
