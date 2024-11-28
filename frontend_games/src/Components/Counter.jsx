import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    function HandleDec(){
       if(count===0){
        setCount(count)
       }else(setCount(count-1))
            
        
        
    }
  return (
    <div>
        <h1>Count:{count}</h1>
    <button onClick ={()=>{setCount(count+1)}}>increment</button>
    <button onClick={HandleDec}>Decrement</button>  
    </div>
  )
}

export default Counter
