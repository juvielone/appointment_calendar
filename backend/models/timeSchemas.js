const mongoose = require('mongoose');

const timeSchema = mongoose.Schema({
    schedTime: { type: String }
});

module.exports = mongoose.model('Time', timeSchema)
