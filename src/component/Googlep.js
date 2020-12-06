import React, { useState } from 'react'
import CreateNo from './CreateNo'
import CreateNote from './CreateNote'
import FooterG from './FooterG'
import HeaderG from './HeaderG'

const Googlep=()=> {
  const [addItem, setAddItem]=useState([]);


     const addNote=(note)=>{
       alert('i am added my note ')
       setAddItem((preData)=>{
         return[...preData, note];

         
       })
     }
     const onDelete=(id)=>{
       setAddItem((oldData)=> 
       oldData.filter((currData,indx)=>{
         return indx!==id;
       }))

     }
  return (
    <div>
      <HeaderG/>
      <CreateNo passNote={addNote}/>
      
      {addItem.map((val,index)=> {
        return <CreateNote
               key={index}
               id={index}
               title={val.title}
               content={val.content}
               deleteItem={onDelete}
        />

      })}
      <FooterG/>
    </div>
  )
}

export default Googlep
