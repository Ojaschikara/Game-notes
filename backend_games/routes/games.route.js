const express = require("express");
const GameModel = require("../models/games.model");
const gameRouter = express.Router();

gameRouter.get("/",async(req,res)=>{
    try {
        const notes = await GameModel.find();
        res.status(200).json({notes})
    } catch (error) {
        res.status(501).json({
            message:`error in notes ${error}`
        })
    }
   
})
gameRouter.post("/add",async(req,res)=>{
    const{title,description} = req.body
    const userId = req.user._id;
    
    try {
        const game = new GameModel({
            title,
            description,
            userId
            
        })
        await game.save();
        console.log(game)
         res.status(201).json({
         message:"Game Note added successfully"
        })
    
    } catch (error) {
        res.status(501).json({
            message:`error in game adding ${error}`
        })
    }
   
})

gameRouter.patch("/update/:id",async(req,res)=>{
    const payload = req.body;
    const gameId = req.params.id;
    const userId = req.user._id;
    try {
        const game = await GameModel.findOne({_id:gameId});
        if(game.userId.toString() == userId.toString()){
            await GameModel.findByIdAndUpdate({_id:gameId},payload);
            return res.status(201).json({
                message:"Game updated successfully"
            })
        }else{
            res.status(500).json({message:"Unauthorized"})
        }
    } catch (error) {
        res.status(501).json({
            message : `error in updation ${error}`
        })
    }
})

gameRouter.delete("/delete/:id",async(req,res)=>{
    const gameId = req.params.id;
    const userId = req.user._id;
    try {
        const game = await GameModel.findOne({_id:gameId});
        if(game.userId.toString() == userId.toString()){
            await GameModel.findByIdAndDelete({_id:gameId});
            return res.status(201).json({
                message:"Game Deleted successfully"
            })
        }else{
            res.status(500).json({message:"Unauthorized"})
        }
    } catch (error) {
        res.status(501).json({
            message : `error in Deletion ${error}`
        })
    }
})

module.exports = gameRouter;