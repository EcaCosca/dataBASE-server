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



// USER GET ROUTE
router.get('/user', isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id;
    
})

// USER PUT ROUTE
router.put('/user', isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id;
    const {
        username,
        password,
        email,
        // favorites,
    } = req.body;
    
    // Update user information
    User.findByIdAndUpdate(userId, {
        username,
        password,
        email,
        // favorites,
    }, {new:true} )
    
    .then((updatedExit) => {
        
            res
            .status(200)
            .json(updatedExit);
            
        })
        .catch((err) => {
            next(createError(err));  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        });
    
})

module.exports = router;
