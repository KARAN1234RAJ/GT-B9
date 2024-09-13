import React from "react";

class UpdatingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "GrowTech",
      changed: false,
    };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("getSnapshotBeforeUpdate called");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
  }

  changeName = () => {
    this.setState({
      name: "TechJob Indore",
      changed: true,
    });
  };

  render() {
    console.log("render called");
    return (
      <div>
        <h1>Updating Example</h1>
        <div>
          Name{" "}
          {this.state.changed ? (
            <h3>{this.state.name}</h3>
          ) : (
            <p>{this.state.name}</p>
          )}
        </div>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default UpdatingExample;
