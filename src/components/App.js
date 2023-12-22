
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [personalGreating,setPersonalGreating] = useState()
  let handelChange=(e)=>{
    
   setPersonalGreating(e.target.value)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label>
        <br></br>
        <input type="text" onChange={(e)=>handelChange(e)}></input>
        <p>{personalGreating}</p>
    </div>
  )
}

export default App
