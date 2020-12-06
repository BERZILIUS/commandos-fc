import React, { useState } from 'react';
import SeaResault from './SeaResault';

const Search=()=> {
    const [img, setImg]=useState("");
const inputEvent=(e)=>{
    const data= e.target.value;
    console.log(data);
    setImg(data);
}

  return (
      <>
    <div className="searchbar">
    <input type="text" 
      placeholder="search anything" 
      value={img}
      onChange={inputEvent}/>
      {img===""? null :<SeaResault name={img}/>}
      
    </div>
    </>
  );
}

export default Search
