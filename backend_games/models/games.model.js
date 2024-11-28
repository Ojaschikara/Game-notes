const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    // status:{type:Boolean,required:true}
    userId:{type: mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    // userName:{type: mongoose.Schema.Types.ObjectId, ref:"User", required:true}
},
{
    versionKey: false,
    timestamps:true
})

const GameModel = mongoose.model("Game",gameSchema);

module.exports = GameModel