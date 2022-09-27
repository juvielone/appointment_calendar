const asyncHandler = require('express-async-handler')

const Time = require('../models/timeSchemas')
const FilterDate = require('../models/filterDateSchemas')


const getSchedTime = asyncHandler(async (req, res) => {
    const schedTimes = await Time.find({})
    res.status(200).json(schedTimes)

});

const getFilterDates = asyncHandler(async (req, res) => {
    const filterDates = await FilterDate.find({})
    res.status(200).json(filterDates)

});


module.exports = {
    getSchedTime, getFilterDates
}