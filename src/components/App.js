
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [personalGreating,setPersonalGreating] = useState()
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label>
        <input type="text" onChange={(e)=> setPersonalGreating(e.target.value)}></input>
        <p>{personalGreating}</p>
    </div>
  )
}

export default App
