const moongose = require("mongoose");

moongose.connect("mongodb://127.0.0.1:27017/scatch");

const userschema = moongose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('user', userschema);