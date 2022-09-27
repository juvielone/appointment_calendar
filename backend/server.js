const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const colors = require('colors');
const connectDB = require('./config/db');

connectDB();

// Admin CMS sched & time
app.use('/admin/cms', require("./routes/adminRoute"))



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})