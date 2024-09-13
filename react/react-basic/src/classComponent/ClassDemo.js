import React, { Component } from "react";
class ClassDemo extends Component {
  // State initialization
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
      count: 0,
    };
  }
  // Method to increase count
  IncreaseCount = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ message: "Goodbye World" });
  };
  render() {
    return (
      <div>
        <h1>ClassComponent</h1>
        <h2>{this.state.count}</h2>
        <p>{this.state.message}</p>
        <button onClick={this.IncreaseCount}>Increase</button>
      </div>
    );
  }
}

export default ClassDemo;
