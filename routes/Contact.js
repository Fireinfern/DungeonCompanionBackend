const express = require("express");
const router = express.Router();
const ContactModel = require("../models/Contact");

router.post("/contact/send", async (req, res) => {
    const newContact = new ContactModel({
        email: req.body.email,
        subject: req.body.subject,
        content: req.body.content
    })
    await newContact.save();
    res.send(newContact);
})

module.exports = router;