const mongoose = require('mongoose');

const filterDateSchema = mongoose.Schema({
    Schedfilter: { type: Date }
});

module.exports = mongoose.model('FilterDate', filterDateSchema)
