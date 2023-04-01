const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Login = require("../models/login");
const Signup = require("../models/signUp");

const controller = {};

controller.signup = async (req,res) => {
    try {
        if(req.body){
            const {login, password} = req.body;
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = await new Signup({
                login: login,
                password: hashedPassword
            })
            req.body.user = newUser;
            newUser = newUser.save();
            res.status(200).json({status: "Success", result: newUser});
        }
        else{
            res.status(400).json({status: "failed", message: "Enter the details"});
        }
        
    } 
    catch (error) {
        res.status(400).json({status: "failed", message: error.message});
    }
    
}

controller.login = async (req,res) => {
    try {
        const {login, password, user} = req.body;
        user.password = await 
        if(login == user.login && password == user.password){
            const {login, password} = req.body;
            if(login == )
        }
    } 
    catch (error) {
        
    }
}