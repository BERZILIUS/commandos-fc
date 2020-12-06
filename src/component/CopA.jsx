import React, { useEffect, useState } from 'react'


const CopA=()=> {
  const [num,setNum]=useState(0);

  const pevent=()=>{
    setNum(num +1);
  }
  useEffect(()=>{
    document.title=`you clicked me ${num}`;
  })
  return (
    <div>
     <button onClick={pevent}>click me{num}</button>
    </div>
  )
}

export default CopA
