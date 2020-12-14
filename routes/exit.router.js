const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user.model");
const Exit = require("../models/exit.model");
const mongoose = require("mongoose");

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLogin
} = require("../helpers/middlewares");

// POST '/exit/exitpoint'
router.post('/exitpoint', (req, res, next) => {
    const userId = req.session.currentUser._id;
    const {
        name,
        img,
        aproachLat,
        aproachLong,
        aproachDescription,
        exitLat,
        exitLong,
        exitDescription,
        landingZoneLat,
        landingZoneLong,
        landingZoneDescription,
        altitude
    } = req.body;
    
    // Create a new exit point
    Exit.create({
        name,
        img,
        aproachLat,
        aproachLong,
        aproachDescription,
        exitLat,
        exitLong,
        exitDescription,
        landingZoneLat,
        landingZoneLong,
        landingZoneDescription,
        altitude,
        creator: userId
    })
    .then((createdExit) => {
        res
        .status(201) // Created
        .json(createdExit); // res.send() 
    })
    .catch((err) => {
        next(createError(err));  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
    });
})


// GET '/exit/exitpoint'
router.get('/exitpoint', (req, res, next) => {
    
    
    Exit.find()
    .populate('users')
    .then((allExits) => {
        console.log("all exits", allExits)
        res
        .status(200) // Found
        .json(allExits); // res.send()
    })
    .catch((err) => {
        res
        .status(500)
        .jason(err)
    })
})

// GET '/exit/exitpoint'
router.get('/exitpoint/:id', (req, res, next) => {
    const exitId = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(exitId)) {
        res
        .status(400) //  Bad Request
        .json({ message: "Specified id is not valid" });
        return;
    }
    
    Exit.findById(exitId)
    
    .then((exit) => {
        console.log('exit', exit)
        res
        .status(200) // Found
        .json(exit); // res.send()
    })
    .catch((err) => {
        res
        .status(500)
        .jason(err)
    })
})


// PUT '/exit/exitpoint'
router.put('/exitpoint/:id', (req, res, next) => {
    const exitId = req.params.id;
    const {
        name,
        img,
        aproachLat,
        aproachLong,
        aproachDescription,
        exitLat,
        exitLong,
        exitDescription,
        landingZoneLat,
        landingZoneLong,
        landingZoneDescription,
        altitude
    } = req.body;
    
    // Create a new exit point
    Exit.findByIdAndUpdate(exitId, {
        name,
        img,
        aproachLat,
        aproachLong,
        aproachDescription,
        exitLat,
        exitLong,
        exitDescription,
        landingZoneLat,
        landingZoneLong,
        landingZoneDescription,
        altitude
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
    
    router.delete('/exitpoint/:id', (req, res, next) => {
        const exitId = req.params.id;
        
        Exit.findByIdAndRemove(exitId)
        .then( () => {
            res
            .status(200) // Found
            .json(`Document ${exitId} was removed successfully.`); // res.send()
        }
        )
        .catch((err) => {
            res
            .status(500)
            .jason(err)
        })
        
        
    })
    
    
    
    
    
    module.exports = router;