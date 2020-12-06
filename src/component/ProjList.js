import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const ProjList=(props)=> {
    const [line , setLine]=useState(false);
    const cutline=()=>{
        setLine(true);

    }
  return (
    <div className="todo_style">
      <span onClick={cutline}><DeleteIcon className="deleteIcon"/></span>
      <li style={{textDecoration:line ?'line-through': "none"}}>{props.text}</li>;
    </div>
  )
}

export default ProjList
