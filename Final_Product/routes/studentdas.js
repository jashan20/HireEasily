const express = require('express');
const studentdas = express.Router();
const mongoose = require('mongoose');
const Profile = require('../models/profile');
// import Model of Contact



studentdas.post('/profile', (req,res) => {

    // console.log(req.body);
    // if(!req.name){
    //     return res.status(422).json({
    //         error: "Please fill all student name"
    //     })
    // }
    const profile = new Profile(req.body);
    // console.log(req.body)
    profile.save((err, profile) => {
        if(err){
            return res.status(400).json({
                message: "NOT able to save class in the Database",
                error: err
            })
        }
        // res.json({
        //     "message": "Done Successfully"
        // })
        res.redirect('/profile');
    })
})

// Get Route
studentdas.get('/profile',(req,res)=>{
    res.render('profile');
})


// for skills page
studentdas.post('/skills', (req,res) => {
    console.log("MESSAGE");
    // res.redirect('/profile')
})
studentdas.get('/skills',(req,res)=>{
    res.render('skills');
})


// for resources page
studentdas.post('/resources', (req,res) => {
    console.log("MESSAGE");
    // res.redirect('/profile')
})
studentdas.get('/resources',(req,res)=>{
    res.render('resources');
})


// for skill test one
studentdas.get('/skilltest1',(req,res)=>{
    res.render('skilltest1')
})
studentdas.post('/skilltest',(req,res)=>{
    console.log('Message for the time being')
})


// for skills test two
studentdas.get('/skilltest2',(req,res)=>{
    res.render('skilltest2')
})
studentdas.post('/skilltest2',(req,res)=>{
    console.log('Message for the time being')
})


// for skills test three
studentdas.get('/skilltest3',(req,res)=>{
    res.render('skilltest3')
})
studentdas.post('/skilltest3',(req,res)=>{
    console.log('Message for the time being')
})

module.exports = studentdas