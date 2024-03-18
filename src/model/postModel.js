const mongoose = require("mongoose");

const postModel = mongoose.Schema({

    Title: {
        type: String,
        required: true,
    },
    Summary: {
        type: String,
        required: true,
    },
    Body: {
        type: String,
        required: true,
    },
    Author: {
        type: String,
        required: true,
    },
    Community: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Likes: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    isActive: {
        type: String,
        default: true,
    },


});
postModel.set("timestamps", true);

module.exports = mongoose.model("post", postModel);