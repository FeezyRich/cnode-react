import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class AsideHeader extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    let { children } = this.props
    return <div className="header">{children}</div>
  }
}
