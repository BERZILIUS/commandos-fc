import React from 'react'
//if you want to link any website from one page to another page we can use link react router dom//
import { NavLink} from  "react-router-dom"
//ww can use NavLink in plaace of Link just as a another option//
const NavBar=()=> {
  return (
    <div>
      <NavLink exact activeClassName="active_class"  to="/about">About us</NavLink>
          <br/>
      <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
         <br/>
      <NavLink exact activeClassName="active_class" to="/user/berzilius/singh/pi">User</NavLink>
             <br/>
      <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
    </div>
  )
}

export default NavBar
