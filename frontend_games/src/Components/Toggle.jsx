import React, { useState } from 'react'

const Toggle = () => {
    const[state,setState]=useState(false);

  return (
    <div style={{backgroundColor:state?"yellow":"brown", width:"300px",height:"300px"}} >
      <button onClick={()=>{setState(!state)}} >{state?"Yellow":"Brown"}Toggle</button>
    </div>
  )
}

export default Toggle
