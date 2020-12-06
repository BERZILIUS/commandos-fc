
import React from "react";
import SlotMech from "./component/SlotMech";


const App=()=> {
  return (
    <div>
     <h1 className="heading_style"> 
      welcome to <span style={{fontWeight:"bold"}}>Slot machine</span></h1>
      <div className="slotmachine">
      < SlotMech x="1" y="1" z="1" />
      <hr/>
      < SlotMech x="5" y="5" z="6" />
      <hr/>
      < SlotMech x="+" y="+" z="+" />
      <hr/>
      </div>
    </div>
  );
}

export default App;
