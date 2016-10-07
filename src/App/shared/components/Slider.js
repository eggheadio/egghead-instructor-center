import React from 'react';
import Slider from 'react-rangeslider';

export default class Volume extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10 /** Start value **/
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value
    });
  }

  render() {
    let {value} = this.state;
    return (
      <div>
        <Slider
          value={value}
          orientation="vertical"
          onChange={this.handleChange}
        />
        <div>Value: {value}</div>
      </div>
    );
  }
}