import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Register(){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[role,setRole] = useState("");
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     role: ""
    // });
    const navigate = useNavigate();

    const handleSubmit= async()=>{
        const payload = {
            name,
            email,
            password,
            role
        }
        try {
            const response = await axios.post(
                "https://game-notes.onrender.com/user/registration",
                payload, 
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        
            alert("User Registered Successfully");
            console.log(payload);
            navigate("/login");
        } catch (error) {
            alert("Error Occured")
        }

    }
    const handleLogin =()=>{
        navigate("/login")
    }
    return(
        <div>
            <h1 >Welcome to the Register Page</h1>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="text" placeholder="Enter role (user or admin)" value={role} onChange={(e)=>setRole(e.target.value)} />
            {/* <select id="role">
             <option value="admin">Admin</option>
             <option value="user">User</option>
             </select> */}

            <button onClick={handleSubmit}>Register</button>
            <button onClick={handleLogin}>Go to Login</button>

        </div>
    )
}

export default Register;