let express = require('express')
let router = express.Router()

const controller = require('../api/index')

router.post('/sendOtp', controller.auth.sendOTP)
router.post('/verifyOtp', controller.auth.verifyOtp)
module.exports = router
