require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");
const Contact = require("./routes/Contact");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB, { useNewUrlParser: true })
    .then(() => {
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use('', Contact);

        app.listen(PORT, () => {
            console.log(`App listening to PORT ${PORT}`);
        })
    })