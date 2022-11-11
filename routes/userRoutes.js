const express = require('express');
const userRouter = express.Router()

const passport = require('passport')

const userController = require('../controller/userController')

userRouter.post('/user/signup',passport.authenticate('signup', { session: false }), userController.userSignup);
userRouter.post('/user/login', userController.userLogin);


module.exports = userRouter