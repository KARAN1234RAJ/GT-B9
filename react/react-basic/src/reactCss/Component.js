import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
const Component = () => {
  return (
    <div>
     <h1 style={{color:"goldenrod",backgroundColor:"black"}}>This is Parent Component</h1>
      <Component1 />
      <Component2/>
    </div>
  )
}

export default Component