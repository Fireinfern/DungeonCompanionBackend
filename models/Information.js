const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email:String,
    date: Number
});

module.exports = mongoose.Model("Information", schema);