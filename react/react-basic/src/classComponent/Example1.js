import React, { Component } from "react";

export default class Example1 extends Component {
  // State is initialized in the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // Method to increment count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // The render method is required and returns JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
