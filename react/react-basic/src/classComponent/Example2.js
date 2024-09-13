import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return <div>Hello, World!</div>;
  }
}
export default LifeCycleExample;
