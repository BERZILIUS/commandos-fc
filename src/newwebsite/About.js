import React from 'react'
import CommanF from './CommanF'
import web from '/reacttut/newhtml/src/images/f3.jpg'


const About=()=> {
  return (
    <>
    <CommanF 
    name='Welcome to about page' 
    imgsrc={web} 
    visit="/contact"
      btname="Contact Now"
    />
    </>
  )
}

export default About
