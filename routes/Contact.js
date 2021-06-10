require('dotenv').config();

const express = require("express");
const router = express.Router();
const ContactModel = require("../models/Contact");
const nodemailer = require('nodemailer');
const cors = require('cors')

router.post("/contact/send", cors() ,async (req, res) => {
    const newContact = new ContactModel({
        email: req.body.email,
        subject: req.body.subject,
        content: req.body.content
    })
    await newContact.save();
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dd.companion.contact',
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: newContact.email,
        subject: "D&D Companion Contact Mail",
        html: `
            <h1>Bienvenido a D&amp;D Companion</h1>
            <hr>
            <p>Estamos muy entusiasmados de poder ser parte de tu nueva aventura! Atenderemos tu consulta en el menor tiempo posible.</p>
            <h3>Sigue Roleando</h3>
            <h3>Equipo de D&D Companion</h3>
        `
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log("Email sent to: " + info.response);
    })
    res.send(newContact);
})

module.exports = router;