const mongoose = require("mongoose");

const userModel = mongoose.Schema({

    Name: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
    Community: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    isActive: {
        type: String,
        default: true,
    },
});
userModel.set("timestamps", true);

module.exports = mongoose.model("users", userModel);
