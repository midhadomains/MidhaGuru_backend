const express = require('express')
const { loginUser, registerUser, getUserProfile } = require('../controllers/userController')

const router= express.Router();

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/profile/:id', getUserProfile)


module.exports=router

