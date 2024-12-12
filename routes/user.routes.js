const express = require("express");
const bcrypt = require("bcryptjs");
const {UserModel} = require('../models/user.model');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();



userRouter.post('/register',(req,res)=>{
    const {username,email,password} =req.body;

    try {
        bcrypt.hash(password,6,async(err, hashpass)=>{
          if (hashpass) {
            const user = new UserModel({username,email,password:hashpass});
            await user.save();
            res.status(200).send({"msg":"A new user has been registered"});
          } else {
            res.status(200).send({"msg":err});
          }
        });
        
    } catch (error) {
        res.status(400).send({"err":error});
    }
})

userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body;

    try {
        const user=await UserModel.findOne({email});

        if(user){
            bcrypt.compare(password, user.password,(err, result)=> {
                const token=jwt.sign({ userId:user._id,username:user.username}, 'midha');
                if(result){
                    res.status(200).send({"msg":"User login successfull","token":token});
                }else{
                    res.send({"msg":"Username or password is wrong"});
                }
            });
        }else{
            res.status(200).send({"msg":"user not found"});
        }
        
    } catch (error) {
        res.status(400).send({"err":error});
    }

})

module.exports = { userRouter };




