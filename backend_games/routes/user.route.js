const express = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/registration",(req,res)=>{
    const{name,email,password,role}=req.body;
    
    try {
        // if(UserModel.findOne({email})){
        //     res.status(501).json({
        //         message:"User already exist"
        // })
        // }
       bcrypt.hash(password , 2, async(err,hash)=>{
          if(err){
             res.status(501).json({
                message:`error in hashing ${err}`,
                
             })
           }
            
         const user = new UserModel({
             name,
             email,
             password:hash,
             role
           
            })
        
          await user.save();
          res.status(201).json({
             message:"user registration successfull",user,
             
            })

       });

        
    } catch (error) {
        res.status(500).json({msg:`error in registration ${error}`})
    }
})


userRouter.post("/login",async(req,res)=>{
    const{email,password}=req.body;
    try {
     
        user = await UserModel.findOne({
          
            email
        })
        if(!user){
         return  res.status(500).json({msg:"User Not found"})
        }
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
              if(result){
                const token = jwt.sign({id : user._id}, process.env.SECRET_KEY);
                res.status(201).json({
                    msg:`${user.name} login successfully`,
                    token
                })
            
              }else{
                res.status(501).json({
                    message:`Incorrect password${err}`
                })
              }

            })
           
        }
       
       
    } catch (error) {
        res.status(500).json({msg:"error in registration"})
    }
})
// userRouter.get("/findUser",async(req,res)=>{
//     const{name}=req.body;
//     try {
//         user = await UserModel.findOne({
          
//             name
//         })
//         if(!user){
//         return  res.status(500).json({msg:"user registration error"})
//         }

//         res.status(201).json({msg:"user find successfull",user})
       
//     } catch (error) {
//         res.status(500).json({msg:"error in registration"})
//     }
// })


module.exports = userRouter


