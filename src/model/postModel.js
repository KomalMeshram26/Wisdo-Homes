const mongoose = require("mongoose");

const postModel = mongoose.Schema({

    Title: {
        type: String, 
        required: true, 
        maxlength: 60
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
    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Likes: {
        type: Number, 
        default: 0 
    },
    Status: {
        type: String, enum: ['Pending approval', 'Approved'], 
        default: 'Pending approval'
    },
    isActive: {
        type: String,
        default: true,
    },
});
postModel.set("timestamps", true);

module.exports = mongoose.model("post", postModel);
