import React, { useState } from 'react'



function ReactHook() {
    const [count ,setCount]=useState(0);
     const incrementCount=()=>{
   
    setCount(count + 1);
     };
     const decrementCount= ()=>{
         setCount(count - 1);

     };

  return (
    <div>
      <h1 className="heading">{count}</h1>
      <button className="btn" onClick={incrementCount}> increment </button>
      <button className="btn" onClick={decrementCount}>decrement</button>
    </div>
  )
}

export default ReactHook
