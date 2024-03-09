const express = require("express")
const userRouter = express.Router()
const {signUpUser} = require('../controllers/users')

userRouter.route('/sign-up').post(signUpUser)

module.exports = userRouter