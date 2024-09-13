import React, { Component } from "react";
import LifeCycleExample from "./Example2";
import ComponentDidMount from "./LifeCycleMethods/ComponentDidMount";
import UpdatingExample from "./LifeCycleMethods/UpdatingExample";
import UnmountingExample from "./LifeCycleMethods/UnmountingExample";

export default class ClassComp extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Class Component!</h1>
        <p>This is a class component.</p>
        {/* <LifeCycleExample /> */}
        {/* <ComponentDidMount/> */}
        {/* <UpdatingExample/> */}
        <UnmountingExample/>
      </div>
    );
  }
}
