const communitieModel = require("../model/communityModel");
const mongoose = require('mongoose');


/*
Api Type : POST
Api Name : add-community
*/

let addCommunity = async (req, res) => {
  const community = new communitieModel(req.body);
  try {
    const data = await community.save();
    res.status(201).json({
      success: true,
      message: "Community add sucessfully",
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
  addCommunity
}
