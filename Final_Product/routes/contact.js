const express = require('express');
const contactrouter = express.Router();
const mongoose = require('mongoose');

// import Model of Contact
const Contact = require("../models/contact");
const Subscription = require("../models/subscribed")


contactrouter.post('/', (req,res) => {
    // console.log("MESSAGE");
    const { name,email,subject,message} = req.body;

    // console.log(req.body);
    if(!name){
        return res.status(422).json({
            error: "Please fill all student name"
        })
    }
    const contacts = new Contact(req.body);
    // console.log(req.body)
    contacts.save((err, contacts) => {
        if(err){
            return res.status(400).json({
                message: "NOT able to save class in the Database",
                error: err
            })
        }
        // res.json({
        //     "message": "Done Successfully"
        // })
        res.redirect('/');
    })

    // res.send("Your Message has been sent")
    // res.redirect('/')
})

// Get Route

contactrouter.post('/subscribe',(req,res)=>{
    const email = req.body;
    if(!email)
    {
        res.render('404')
    }
    const subscriptions = new Subscription(req.body);
    subscriptions.save();

})
contactrouter.get('/', (req,res)=>{

    res.render('index');
    // res.send("Message has been sent Successfully")
})


module.exports = contactrouter