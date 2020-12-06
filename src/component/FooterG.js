import React from 'react'

const FooterG=()=> {
  const year =new Date().getFullYear();
  return (
    <>
       <footer>
       <p>copyright @ {year}</p>
       </footer>
     
    </>
  )
}

export default FooterG
