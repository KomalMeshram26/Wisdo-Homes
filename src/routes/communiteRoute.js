const express = require("express");
const {
    addCommunity

} = require("../controller/communiteController");

const userRouter = express.Router();

userRouter.post("/add", addCommunity);

module.exports = userRouter;
