import React, { useState } from 'react'

const Revent=()=> {
    const purple='#8e44ad';
    const [bg, setBg]=useState(purple);
    const [name, setName]=useState('clicked me')
    const bgChange=()=>{
        let newBg='#34495e';
        setBg(newBg);
        setName("ouch!!")
    }
    const bgBack=()=>{
      setBg(purple);
      setName("ayyo :")

    }
  return (
    <div style={{backgroundColor:bg}}>
      <button onClick={bgChange} onDoubleClick={bgBack}>click me</button>
    </div>
  )
}

export default Revent
