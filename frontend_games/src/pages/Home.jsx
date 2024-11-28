import { useNavigate } from "react-router-dom";



function Home(){
    const navigate = useNavigate();
    const handleRegister = () =>{
        navigate("/register")
    }

    return(
        <div>
            <h1>Welcome to Game Note App</h1>
            <h2>Explore the Games</h2>
            <button onClick={handleRegister}>To Register Click Me..!</button>
        </div>
    )
}

export default Home;