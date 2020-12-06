import React, { useState } from 'react'

const Challge6=()=> {

    let newTime=new Date().toLocaleTimeString();
    const [time,setTime]= useState(newTime);
     const Utime=()=>{
      newTime=new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setInterval(Utime,1000);
  return (      
    <div>
      <h1>{time}</h1>
      
    </div>
  )
}

export default Challge6
