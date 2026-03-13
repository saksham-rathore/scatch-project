const moongose = require("mongoose");

moongose.connect("mongodb://127.0.0.1:27017/scatch");

const userschema = moongose.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('user', userschema);