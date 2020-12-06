import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const CreateNote=(props)=> {

  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return (
    <>
      <div className="note">
         <h1>{props.title}</h1>
         <br/>
         <p>{props.content}</p>
         <button className="btn" onClick={deleteNote}>
         <DeleteOutlineIcon className="delete_icon"/>
         </button>
      </div>  
    </>
  )
}

export default CreateNote