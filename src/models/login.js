const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    login:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const login = new mongoose.model("Login", loginSchema);
module.exports = login;