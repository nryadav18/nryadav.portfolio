const express = require('express')
const mongoose = require('mongoose')

const ContactMe = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    message : {
        type : String
    },
});

module.exports = mongoose.model("ContactMe",ContactMe)