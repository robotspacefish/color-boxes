import React, { Component } from 'react'
import Box from './Box';
import './Boxes.css';
import { randomHexStr } from './helpers.js';

export default class Boxes extends Component {
  static defaultProps = { numBoxes : 16 }
  constructor(props) {
    super(props);
    const arr = Array.from({length : this.props.numBoxes}).map(() => {
      return randomHexStr(6)
    })
    this.state = { boxes : [...arr] };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(id) {
    const boxes = [...this.state.boxes];
    boxes[id] = this.pickNewColor(this.state.boxes[id]);
    this.setState({ boxes });
  }

  pickNewColor(oldColor) {
    let newColor = '';
    do {
      newColor = randomHexStr(6);
    } while (newColor === oldColor)
    return newColor;
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