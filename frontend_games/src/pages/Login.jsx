import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate()
    const handleLogin = async()=>{
         const payload={
            email,
            password
         }
         try {
            const response = await fetch("https://game-notes.onrender.com/user/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(payload)
              
            });
            const data = await response.json();
            
            if(data.token){
                localStorage.setItem("token",data.token);
                alert(`Login Successfull`);
                navigate("/gamenotes")
                
            }
            

           
         } catch (error) {
            alert(`Login Failed ${error}`)
         }
    }
    const handleRegister=()=>{
        window.location.href="/register";

    }
    return(
        <div>
            <h1>Welcome to the Login Page</h1>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Go to Register</button>
        </div>
    )
}

export default Login;