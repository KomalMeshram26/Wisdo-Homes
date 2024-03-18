const express = require("express");
const {
    createUser
 
} = require("../controller/userController");

//const { verifyTokenFn} = require('../utils/jwt')

const userRouter = express.Router();

userRouter.post("/create",createUser);
//userRouter.get("/get/:id",verifyTokenFn,getFeed);

module.exports = userRouter;