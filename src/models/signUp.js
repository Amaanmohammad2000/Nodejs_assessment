const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    login:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
})

const signup = new mongoose.model("Signup", signupSchema);
module.exports = signup;