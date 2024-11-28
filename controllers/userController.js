const validator = require('validator')
const userModel = require('../models/userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:'User Does Not Exist'})
        }
        const isMatch = await bcryptjs.compare(password,user.password);
        if(isMatch){
            const token = createToken(user._id);
            res.json({success:true, token, profilePicture: user.profilePicture, message: "You are now logged in"});
        }else{
            res.json({success: false, message: 'Incorrect Password'})
        }
    }catch(err){
        console.log(err);
        res.json({success:false,message:'Invalid Credentials'})
    }
}

// Route for user register
const registerUser = async(req,res)=>{
    try{
        const {name,email,password,profilePicture} = req.body
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:'User already exists'})
        }
        if(!validator.isEmail){
            return res.json({success:false,message: 'Please enter a valid email'})
        }
        if(password.length<8){
            return res.json({success:false,message: 'Please enter a strong password'})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt)
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            profilePicture: profilePicture || '',
        })
        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({success:true, token, profilePicture: user.profilePicture, message: "You are successfully registered"})
    }catch(e){
        console.log(e);
        res.json({success:false, message: e.message})
    }
}

module.exports = {loginUser, registerUser}

