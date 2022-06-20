const express = require('express');
const loginrouter = express.Router();
const mongoose = require('mongoose');

// import Model of Contact



loginrouter.post('/login', (req,res) => {
    // console.log("MESSAGE");
    res.redirect('/profile')
})

// Get Route
loginrouter.get('/login',(req,res)=>{
    res.render('login');
})

loginrouter.post('/register', (req,res) => {
    // console.log("MESSAGE");
    res.redirect('/register')
})

// Get Route
loginrouter.get('/register',(req,res)=>{
    res.render('register');
})
module.exports = loginrouter