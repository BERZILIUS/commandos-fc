import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip } from '@material-ui/core';
//import Tooltip from '@material-ui/core/Tooltip';

const Increment=()=> {
    const [count, setCount]=useState(0);
    const inCount=()=>{
        setCount(count +1);

    }
    const deCount=()=>{
        if(count>0){
        setCount(count-1);
        }else{
            alert('sorry value reached to zero');
            setCount(0);
        }
    }
  return (
      <>
        <div className="">
         <h1 className="heading">{count}</h1>
           <div>
           <Tooltip title="Delete">
               <button   onClick={inCount}><AddIcon/></button>
               </Tooltip>

               <Tooltip title="Delete">
               <button   onClick={deCount}><DeleteIcon/></button>
               </Tooltip>
             </div>
        </div>
    </>
  )
}

export default Increment
