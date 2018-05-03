import React, { Component } from 'react';
import Slider from 'rc-slider';
import './style.sass'
import './style.css';

class RangeSlider extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="ui-range-slider">
        <h3>Price</h3>
        <Slider
          min={this.props.min || 0}
          max={this.props.max || 1000}
          defaultValue={this.props.max || 50}
          onChange={(value) => this.props.setFilter("price", value, "")}
        />
      </div>
    )
  }
}

export default RangeSlider;