require('dotenv').config();

const express = require("express");
const router = express.Router();
const InformationModel = require("../models/Information");
const nodemailer = require('nodemailer');

router.post("/information/send", async (req, res) => {
    const newInfo = new InformationModel({
        email: req.body.email,
        date: Date.now()
    })
    await newInfo.save();
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
            <p>Estamos muy entusiasmados de poder ser parte de tu nueva aventura!</p>
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
    res.send(newInfo);
});

module.exports = router;