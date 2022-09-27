const mongoose = require('mongoose');

const filterDateSchema = mongoose.Schema({
    schedFilter: { type: Date }
});

module.exports = mongoose.model('FilterDate', filterDateSchema)
