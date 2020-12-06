import React from 'react'

const SeaResault=(props)=> {
    const img=`https://source.unsplash.com/400x300/?${props.name}`
  return (
    <div>
      <img src={img} alt="random search"/>
    </div>
  )
}

export default SeaResault
