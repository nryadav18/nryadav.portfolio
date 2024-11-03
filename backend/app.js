// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Initialize Express app
const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// MongoDB Model Setup
const ContactMeSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    message: { type: String },
});
const ContactMe = mongoose.model("ContactMe", ContactMeSchema);

// ContactMe controller function
const ContactMeController = async (req, res) => {
    const data = req.body;

    try {
        // Save data to MongoDB
        await ContactMe.create(data);
        res.status(201).json("Added to DB");
    } catch (error) {
        return res.status(500).json(error);
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devnryadav26@gmail.com',
            pass: 'gmzq dosf edxz pxfg' // Important: Move credentials to environment variables in production
        }
    });

    // Mail options
    const mailOptions = {
        from: 'devnryadav26@gmail.com',
        to: 'cserajeswaryadav@gmail.com',
        subject: `${req.body.name}`,
        html: `<h3>${req.body.name} : ${req.body.email}</h3><p style="letter-spacing:.75px">${req.body.message}</p>`,
    };

    // Send mail
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            return res.status(200).json("Mail Sent Successfully");
        }
    });
};

// Route setup
app.post("/contact-me", ContactMeController);

// MongoDB Connection
mongoose.connect("mongodb+srv://Raj:Rajeswar143@cluster0.f9qho.mongodb.net/")
    .then(() => console.log("Connected to MongoDB Successfully"))
    .catch(err => console.log(err));

// Error handling middleware for 404
app.use((req, res, next) => {
    res.status(404).send("404: Page Not Found");
});

// Export the app as a module (important for Vercel)
module.exports = app;
