import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ProjList from './ProjList';
import '/reacttut/newhtml/node_modules/bootstrap/dist/css/bootstrap.min.css';

const ProjTodo=()=> {
    const [item, setItem]=useState();
    const [newItem, setNewItem]= useState([]);

    const itemEvent=(event)=>{
        setItem(event.target.value);

    }
    const batn=()=>{
      setNewItem((preValue)=>{
        return[...preValue,item];

      })
      setItem("")
    }
  return (
      <>
    <div className="main_div">
      <div className="center_div">
      <br/>
      <h1 className="text-capitalize text-center text-dark ">ToDo list</h1>
      <br/>
      <input type="text" value={item} placeholder="add an Item" onChange={itemEvent}/>
           <Button className="newbtn" onClick={batn}><AddIcon/></Button>
           <br/>
           <ol>
               
              { newItem.map((val,index) =>{
                 return(
                 <ProjList key= {index} text={val}/>

               )})}
           </ol>
      </div>
    </div>
    </>
  )
}

export default ProjTodo
