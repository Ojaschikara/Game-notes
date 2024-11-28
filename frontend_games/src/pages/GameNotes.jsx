import { useEffect, useState } from "react";


function GameNote(){
    const[games,setGames] = useState([]);
    const fetchGames = async()=>{
        const token = localStorage.getItem("token");
        try {
            const response = await fetch("https://game-notes.onrender.com/game",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            const data= await response.json();
            console.log(data)
            setGames(data.notes)
        } catch (error) {
            alert(`Error occured${error}`)
        }
    }
    useEffect(()=>{
        fetchGames()
    },[])

    const handleDelete=async(id)=>{
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(`https://game-notes.onrender.com/game/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
           
           fetchGames();
          }catch(error){
            alert(`error occured${error}`)
          }
        
        }
        const handleLogout=()=>{
            localStorage.removeItem("token");
            window.location.href="/login";
        }
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
            <h1>Game Data Page</h1>
            {games? games.map((game)=>{
                return(
                    <div key={game._id}>
                    <h2 >  {game.title}  </h2>
                    <h2 >  {game.description}  </h2>
                    <button onClick={()=>{handleDelete(game._id)}} >Delete the Game</button>
                    </div>
                )
            }): <h2>No games to display</h2> }
            
        </div>
    )
}

export default GameNote;