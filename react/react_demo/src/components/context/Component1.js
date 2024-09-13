import React, { createContext } from "react";
import Component2 from "./Component2";
// const MyContext = createContext();
// const LastName = createContext();
const Component1 = () => {
  const lName = "Raj";
  return (
    <div>
      <h1>Component 1</h1>
      {/* <MyContext.Provider value="Hello from Component 1"> */}
        {/* <LastName.Provider value={lName}> */}
          <Component2 />
        {/* </LastName.Provider> */}
      {/* </MyContext.Provider> */}
    </div>
  );
};
// export { MyContext,LastName };
export default Component1;
