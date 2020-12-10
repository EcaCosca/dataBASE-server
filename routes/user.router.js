const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user.model");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
} = require("../helpers/middlewares");




router.get('/user', isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id;
    
})

router.get('/user', isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id;
    
})

module.exports = router;
