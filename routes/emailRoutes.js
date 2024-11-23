// routes/emailRoutes.js

const express = require('express');
const {sendEmail} = require('../controllers/emailController');
const router = express.Router();

//define route
router.post('/', sendEmail); //send email

module.exports = router;