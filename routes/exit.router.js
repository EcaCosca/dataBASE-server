const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user.model");
const Exit = require("../models/exit.model");

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
} = require("../helpers/middlewares");

// GET '/exit/exitpoint'
router.get('/exitpoint',  isLoggedIn, (req, res, next) => {
  

    res
      .status(204)  //  No Content
      .send();
  } )
})


// POST '/exit/exitpoint'
router.post('/exitpoint', isLoggedIn, (req, res, next) => {
  const { 
    name,
    // img,
    // aproachLat,
    // aproachLong,
    // aproachDescription,
    // exitLat,
    // exitLong,
    // exitDescription,
    // landingZoneLat,
    // landingZoneLong,
    // landingZoneDescription,
    // creator,
    // altitude
   } = req.body;

  

      

    // Create a new exit point
    Exit.create( { name })
        .then( (createdExit) => {

        res
            .status(201) // Created
            .json(createdUser); // res.send()

        })
        .catch( (err) => {
        next( createError(err) );  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        });

    


})

module.exports = router;