const express = require('express');
const router = express.Router();
const { getSchedTime, getFilterDates } = require("../controllers/adminControler")

// endpoint came from server.js@root

router.route('/').get(getSchedTime)
router.route('/filterdate').get(getFilterDates)



module.exports = router