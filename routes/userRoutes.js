const express = require('express');
const userRouter = express.Router()

const passport = require('passport')

const userController = require('../controller/userController')

userRouter.post('/signup',passport.authenticate('signup', { session: false }), userController.userSignup);
userRouter.post('/login', userController.userLogin);


module.exports = userRouter