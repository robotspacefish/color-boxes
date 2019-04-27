import React, { Component } from 'react'
import Box from './Box';
import './Boxes.css';
import { randomChar } from './helpers.js';

export default class Boxes extends Component {
  constructor(props) {
    super(props);
    const arr = [];
    arr.length = 16;
    arr.fill('FFFFFF')

    this.state = {
      boxes : [...arr]
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(id) {
    let newColor = '';
    for (let i = 0; i < 6; i++) {
      newColor += randomChar('0123456789ABCDEF');
    }

    const boxes = [...this.state.boxes];
    boxes[id] = newColor;
    this.setState({ boxes });
  }

  render() {
    return (
      <div className="Boxes">
        {this.state.boxes.map((color, i) => (
          <Box
            color={color}
            id={i}
            key={i}
            changeColor={this.changeColor}
          />
        ))}
      </div>
    )
  }
}