import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNo=(props)=> {
    const[expand , setExpand]=useState(false);

    const [note, setNote]=useState({
        
        content:"",
        title:"",
    })
     const InputEvent=(event)=>{
         

         const {name, value}= event.target;
        

         setNote((preData)=>{
             return{
                 ...preData,
                 [name]:value,
               
                

             }
         })
     }
     const addevent=()=>{
         props.passNote(note);
         setNote({
            title:"",
            content:"",
        });

     }
     const expandIt=()=>{
         setExpand(true);

     }
     const backToNormal=()=>{
         setExpand(false);
     }
  return (
      <>
            <div className="main_note" onDoubleClick={backToNormal}>
                  <form>
                    {  expand?
                          <input type="text" 
                           name="title"
                           value={note.title} 
                           onChange={InputEvent} 
                           placeholder="Title"
                           autoComplete="off"
                           />:null}

                            <textarea 
                             rows=""
                             column="" 
                             name="content"
                             value={note.content}
                             onchange={InputEvent} 
                             placeholder="write a note..."
                             onChange={expandIt}
         
                            ></textarea>
                            { expand?
        <Button onClick={addevent} className="plus_sign"><AddIcon className="plus_sign"/>
        </Button>:null}
    </form>
    </div>
    </>
  )
}

export default CreateNo
