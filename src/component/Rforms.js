import React, { useState } from 'react'

const Rforms =()=> {
    const [fullName, setFullName]=useState({
      fname:"",
      lname:"",
      email:"",
      pnumber:"",

    });
    const inputEvent=(event)=>{
      console.log(event.target.value);


      const {value, name}=event.target;
      
      setFullName((preValue)=>{
       
          return{
            ...preValue,
            [name]:value,
          };
         });
    }
              const rout=(event)=>{
               event.preventDefault();
             }  
      return (
      <>
        <div className="main_div">
          <form onSubmit={rout}>
           <div>
            <h1>hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email}</p>
                <p> {fullName.pnumber}</p>
              <input type="text" placeholder='enter your name' name="fname"  onChange={inputEvent} 
              value={fullName.fname} />
              <br/>
              <input type="text" placeholder='enter your Password' name="lname" onChange={inputEvent}
               value={fullName.lname}/>
               <br/>
                <input type="email" placeholder='enter your email' name="email" onChange={inputEvent}
               value={fullName.email}/>
               <br/>
                <input type="number" placeholder='enter your phone number' name="pnumber" onChange={inputEvent}
               value={fullName.pnumber}/>
              <button type="submit"> Clicked me 🦥</button>

           </div> 
           </form>
       </div>
     </>
  )

}
export default Rforms
