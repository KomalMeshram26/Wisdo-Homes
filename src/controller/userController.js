const userModel = require("../model/userModel");
const mongoose = require('mongoose');


/*
Api Type : POST
Api Name : create-user
*/

let createUser = async (req, res) => {
  const user = new userModel(req.body);
  try {
    const data = await user.save();
    res.status(201).json({
      success: true,
      message: "User registerd sucessfully",
      user: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error occur ${error.message}`,
    });
  }
};

module.exports = {
  createUser
}
