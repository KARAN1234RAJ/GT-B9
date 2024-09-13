// App.js
import React from "react";
import BoxComponent from "./BoxComponent";
import ContainerComponent from "./ContainerComponent";

const ChildrenProps = () => {
  return (
    <div>
      <h1>Using the Children Prop</h1>
      <BoxComponent>
        <h2>Title Inside the Box</h2>
        <p>This is some content inside the box.</p>
        <button>Click Me</button>
      </BoxComponent>
      <h1>Using the render Prop</h1>
      <ContainerComponent>
        <h2>Header in the Container</h2>
        <p>This is some text inside the container.</p>
        <img src="image.jpg" alt="Inside Container" />
      </ContainerComponent>
    </div>
  );
};

export default ChildrenProps;
