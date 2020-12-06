import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'

const UserR=()=> {
    const history= useHistory();
    const location= useLocation();
        const {fname, lname}= useParams();
  return (
  <div>
  <h1>use {fname} {lname} page</h1>
    
    <p>my Current location is {location.pathname}</p>
    {location.pathname === `/user/berzilius/singh` ?(
        <button onClick={()=>history.goBack()}>click me</button>
        ) : null}
     
    </div>
  )
}

export default UserR
