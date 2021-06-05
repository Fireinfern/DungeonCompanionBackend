const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: String,
    subject: String,
    content: String
})

module.exports = mongoose.model("Contact", schema);