import React from 'react'
import CommanF from './CommanF'
import web from '/reacttut/newhtml/src/images/f2.jpg'


const Home=()=> {
  return (
    <div>
      <CommanF
        name='Grow your football skills with'     
        imgsrc={web}      
        visit="/services"
        btname="Get Started"
    />
      
    </div>
  )
}

export default Home
