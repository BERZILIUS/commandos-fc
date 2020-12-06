import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from '../newwebsite/About'
import BarNav from '../newwebsite/BarNav'
import Contact from '../newwebsite/Contact'
import Footer from '../newwebsite/Footer'
import Home from '../newwebsite/Home'
import Services from '../newwebsite/Services'
import web from '/reacttut/newhtml/src/images/logo..png'

const Website=()=> {
  return (
    <div>
                   <img src= {web} className="img-fluid animated text-center" alt="home img"/>
           <BarNav/>
          <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/services" component={Services}/>
              <Route path="/contact" component={Contact}/>
              <Redirect to="/home"/>
           
           </Switch>
            <Footer/>
         </div>
       )
     }
     
     export default Website
