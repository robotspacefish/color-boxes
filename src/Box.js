import React, { Component } from 'react'
import './Box.css';

export default class Box extends Component {
  handleClick = (e) => {
    this.props.changeColor(e.target.id)
  }
  render() {
    return (
      <div
        style={{ 'backgroundColor' : `#${this.props.color}` }}
        className="Box"
        id={this.props.id}
        onClick={this.handleClick}>
      </div>
    )
  }
}
