const postModel = require("../model/postModel");
const userModel = require("../model/userModel");
const mongoose = require('mongoose');

/*
Api Type : POST
Api Name : create-post
*/

let createPost = async (req, res) => {
  const postData = new postModel(req.body);
  try {
    const data = await postData.save();
    res.status(201).json({
      success: true,
      message: "Post registerd sucessfully",
      user: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error occur ${error.message}`,
    });
  }
};

/*
Api Type : GET
Api Name : get-feed
*/

const getFeed = async (req, res) => {
  const postId = req.params.id;
  const author_country = {
    "Kiran Desai": "India",
    "Stephen": "USA",
  };

  try {
    let user = await userModel.findById(postId);
    if (!user) {
      return res.status(200).json({
        success: true,
        message: "User not found",
        feed: [],
      });
    }

    let feed = await postModel.find();
    let sameCountryPosts = feed.filter(item => {
      return author_country[item.Author] === user.Country;
    });

    sameCountryPosts.sort((a, b) => {
      const scoreA = (0.8 * a.Likes) + (0.2 * a.Body.length);
      const scoreB = (0.8 * b.Likes) + (0.2 * b.Body.length);
      return scoreB - scoreA;
    });

    let otherCountryPosts = feed.filter(item => {
      return author_country[item.Author] !== user.Country;
    });

    otherCountryPosts.sort((a, b) => {
      const scoreA = (0.8 * a.Likes) + (0.2 * a.Body.length);
      const scoreB = (0.8 * b.Likes) + (0.2 * b.Body.length);
      return scoreB - scoreA;
    });

    let sortedFeed = sameCountryPosts.concat(otherCountryPosts);
    res.status(200).json({
      success: true,
      message: "Recommended feed",
      feed: sortedFeed,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error occur ${error.message}`,
    });
  }
};

module.exports = {
  createPost,
  getFeed
}
