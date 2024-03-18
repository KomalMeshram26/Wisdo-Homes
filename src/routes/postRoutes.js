const express = require("express");
const {
    createPost,getFeed
 
} = require("../controller/postController");

const controller = require("../controller/index")

const { verifyTokenFn} = require('../utils/jwt')

const userRouter = express.Router();

userRouter.post("/create",verifyTokenFn,createPost);
userRouter.get("/get/:id",verifyTokenFn,getFeed);

module.exports = userRouter;