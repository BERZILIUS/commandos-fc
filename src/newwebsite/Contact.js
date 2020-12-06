import React, { useState } from 'react'

const Contact=()=> {
  const [data, setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });
  const InputEvent=(event)=>{
    const{name, value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }

      ;
    })

  }
  const formsubmit=(e)=>{
    e.preventDefault();
    alert(`
          My name is ${data.fullname}.
          You can contact me ${data.phone} 
          and my email id is ${data.email}`);

  }
  return (
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
    <div className="row">
       <div className="col-md-6 col-10 mx-auto">
       
       <form onSubmit={formsubmit}>
  <div className="form-group">
    <label for="exampleFormControlInpu1">Full Name</label>
    <input type="text" 
    className="form-control"
     id="exampleFormControlInpu1" 
      name="fullname"
      value={data.fullname}
      onChange={InputEvent}
       placeholder="Enter your Name"
     />
    
  </div>
  <br/>

     <div className="form-group">
    <label for="exampleFormControlInpu1">Phone Number</label>
    <input type="Number" 
    className="form-control"
     id="exampleFormControlInpu1" 
     name="phone"
      value={data.phone}
      onChange={InputEvent}
       placeholder="Enter your Phone number"
     />
   
  </div>
  <br/>
  <div className="form-group">
    <label for="exampleFormControlInpu1">Email Address</label>
    <input type="text" 
    className="form-control"
     id="exampleFormControlInpu1" 
     name="email"
      value={data.email}
      onChange={InputEvent}
       placeholder="Enter your Email_id"
     />
   
  </div> 
  <br/>

  <div className="form-group">
    <label for="exampleFormControlInpu1">Text</label>
    <textarea
      className="form-control" 
      id="exampleFormControlTextaera1"
       rows="3"
       name="msg"
      value={data.msg}
       onChange={InputEvent}
       />

  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="col-12">
  <button type="submit" className="btn btn-outline-primary ">Submit</button>
  </div>
       </form>

       </div>

    </div>

    </div>
    </>
  )
}

export default Contact
