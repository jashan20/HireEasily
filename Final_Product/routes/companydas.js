const express = require('express');
const companydas = express.Router();
const mongoose = require('mongoose');
const emailer = require('./email');

// import Model of Contact
const Feedback = require("../models/feedback");


companydas.post('/comprofile', (req,res) => {
    
    // res.redirect('/profile')
})

// Get Route
companydas.get('/comprofile',(req,res)=>{
    res.render('comprofile');
})


// for skills page
companydas.post('/feedback', (req,res) => {
    console.log("MESSAGE");
    // res.redirect('/profile')
})
companydas.get('/feedback',(req,res)=>{
    res.render('feedback');
})

// for skills page
companydas.post('/feedbackform', (req,res) => {
    const feedback = new Feedback(req.body);
    // console.log(req.body)
    feedback.save((err, feedback) => {
        if(err){
            return res.status(400).json({
                message: "NOT able to save class in the Database",
                error: err
            })
        }
        // res.json({
        //     "message": "Done Successfully"
        // })
        res.redirect('/comprofile');
    })

})
companydas.get('/feedbackform',(req,res)=>{
    res.render('feedbackform');
})

// email
companydas.get('/email',(req,res)=>{
    emailer.transport("saini.sushant10@gmail.com","Your profile has been shortlisted","You have a interview on 11.00 AM")
    res.render('comprofile');
})


module.exports = companydas