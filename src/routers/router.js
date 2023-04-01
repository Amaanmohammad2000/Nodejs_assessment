const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.post("/signup", Controller.signup);
router.post("/login", Controller.login);

