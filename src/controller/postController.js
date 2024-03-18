const postModel = require("../model/postModel");
const userModel = require("../model/userModel");
const mongoose = require('mongoose');


let createPost = async (req, res) => {
const postData = new postModel(req.body);
    try {
       const data = await postData.save();
        res.status(201).json({
          success: true,
          message: "Post registerd Sucessfully",
          user: data,
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `Error occur ${error.message}`,
      });
    }
  };

//   const getFeed = async (req, res) => {
//     try {
//       // Implement algorithm to fetch recommended posts
//       const recommendedPosts = await postModel.find({ Community: { $in: req.user.communities } })
//         .sort('-relevanceScore')
//         .limit(10);
//       res.status(200).json(recommendedPosts);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };



const getFeed =  async (req, res) => {
    //const ObjectId = mongoose.Types.ObjectId;
    const postId = req.params.id; // Extract postId from req.params
    const authore_contry={
        "abc":"india",
        "pqr":"USA",
    };
let user =  await userModel.findById(postId);
   //console.log('Requested Post ID:', postId);
    try {
      let feed = await postModel.find();
      var result =[];
      var temp =[];
      //logic to get the data according the country of author and user
      feed.forEach((item) => {
        if(authore_contry[item.Author]==user.Country){
            result.push(item);
        }
        else{
            temp.push(item);
        }
      });
      result.push(temp)
     // let totalCompanies = await companySchema.find().count();
      res.status(200).json({
        success: true,
        message: "All feed list",
        feed: result,
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