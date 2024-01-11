const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
  logoUrl: {
    required: true,
    type: String,
  },
}, {collection: shoppingSites});

module.exports = mongoose.model("shoppingSites", dataSchema);
