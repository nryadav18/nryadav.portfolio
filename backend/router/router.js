const express = require('express')
const Router = express.Router()
const ContactController = require("../controller/contactController")

Router.post("/contact-me",ContactController.ContactMe)

module.exports = Router;