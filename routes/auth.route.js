const express = require('express')
const authControl = require('../controllers/auth.control')
const router = express.Router()


router.post('/register', authControl.register)

module.exports = router;