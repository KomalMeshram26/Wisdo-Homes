const mongoose = require("mongoose");

const communtiesModel = mongoose.Schema({

  Title: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  MemberCount: {
    type: Number, default: 0
  },
  isActive: {
    type: String,
    default: true,
  },
});
communtiesModel.set("timestamps", true);

module.exports = mongoose.model("community", communtiesModel);
