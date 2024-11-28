const express = require("express");
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const dotenv = require("dotenv").config();
const server = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const gameRouter = require("./routes/games.route");
const auth = require("./middlewares/auth.middleware");

server.use(express.json())
server.use(cors({
    origin:"*"
}))
server.use("/user",userRouter);
server.use("/game",auth,gameRouter)

server.get("/",(req,res)=>{
    res.send("backend server running...")
})


server.listen(PORT,async()=>{
    try {
        await connection
        console.log("connection successful on port",PORT)
    } catch (error) {
        console.log("error in connection",error)
    }
})
