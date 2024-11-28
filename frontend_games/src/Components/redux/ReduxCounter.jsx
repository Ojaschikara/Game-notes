
import {useSelector,useDispatch} from "react-redux";
import React from 'react';

 




const ReduxCounter=()=>{
    const count = useSelector((state)=> state.count);

    const dispatch= useDispatch()

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=> dispatch({type:"Increment"})}>Increment</button>
            <button onClick={()=> dispatch({type:"Decrement"})}>Decrement</button>
        </div>
    )
}

export default ReduxCounter;
