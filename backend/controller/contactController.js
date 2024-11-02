const express = require('express')
const contact = require('../model/contactModel')
const nodemailer = require('nodemailer')


const ContactMe = async(req,res)=>{
    var data = req.body;
    await contact.insertMany(data)
    .then(succ=>{
        return res.status(201).json("Added to DB")
    })
    .catch(err=>{
        return res.status(500).json(err)
    })


    const Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devnryadav26@gmail.com',
            pass: 'gmzq dosf edxz pxfg'
        }
    })

    const MailOptions = {
        from: 'devnryadav26@gmail.com',
        to: 'cserajeswaryadav@gmail.com',
        subject: `${req.body.name}`,
        html: `<h3>${req.body.name} : ${req.body.email}</h3><p style="letter-spacing:.75px">${req.body.message}</p>`,
    }

    Transporter.sendMail(MailOptions, (err, info) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            return res.status(200).json("Mail Sent Successfully")
        }
    })
}

exports.ContactMe = ContactMe;