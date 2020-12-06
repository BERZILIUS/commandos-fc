import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorR=()=> {
  return (
    <div>
      <h1>error 4004 page not found</h1>
      <p>sorry this is not valid page</p>
      <NavLink to="/about">Go back</NavLink>
    </div>
  )
}

export default ErrorR
