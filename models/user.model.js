const mongoose = require("mongoose");
const { removeListener } = require("../app");
const { type } = require("express/lib/response");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: [ 'user', 'artist'],
    default: 'user',
  },
});


const usermodel = mongoose.model("user", userschema)

module.exports = usermodel;