// import React, { useEffect, useState } from 'react'
// import axios from "axios";

// const UseEffectData = () => {
//     const[users,setUsers]= useState([])
    
       
//         useEffect(()=>{
//         const fetchData= async()=>{
//             try {
//                 let res= await axios.get("https://jsonplaceholder.typicode.com/users");
//                 setUsers(res.data)
//             } catch (error) {
//                 console.log(error,"error")
//             }
//         } 
//         fetchData();
        
        
//         },[])
    
   
//   return (
//     <div>
     
      
//         {users.map((user)=>(
//            <div key={user.id}>
//             <h1>{user.name}</h1>
//            </div>
//         ))}
      
//     </div>

//   )
// }

// export default UseEffectData

import { useState } from "react";
import axios from "axios";
import React from 'react';

const CrudData = () => {
  const[users,setUsers] = useState([]);
    const HandleClick=()=>{
       const fetchData=async()=>{
        let res= await axios.get("https://jsonplaceholder.typicode.com/users")
       
        setUsers(res.data)
       }
       fetchData()
    }
    const HandleEdit=async()=>{
        let updatedData={
        
        }
        const editData=()=>{
          
        }
     
    }
    const HandleDelete=async()=>{
      let res= await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
  return (
    <div>
      <button onClick= {HandleClick} >Get User</button>
      
      {users.map((user)=>(
        <div key={user.id}>
            
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={HandleEdit}>Edit</button>
            <button onClick={HandleDelete}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default CrudData
