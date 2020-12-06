import React from 'react'
import AboutR from './AboutR'
import { Redirect, Route, Switch } from "react-router-dom"
import ContactR from './ContactR'
import ErrorR from './ErrorR'
import NavBar from './NavBar'
import UserR from './UserR'
import Search from './Search'


const AppC=()=> {
  return (
    <div>
      
        <NavBar/>
       <Switch>
        <Route exact path="/about" component={AboutR}/>
        <Route path="/contact" component={ContactR}/>
        <Route path="/user/:fname/:lname" component={UserR}/>
        <Route exact path="/search" component={Search}/>
        {/*<Route component={ErrorR}/> i can use redirect if i dont want to use
        error 404 page i can use Redirect*/}
        <Redirect to="/about"/>
      
        </Switch>
    </div>
  )
}

export default AppC
