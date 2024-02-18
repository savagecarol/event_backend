const express = require('express');
const authRoute = require('./authRoute');

const router =  express();
router.use('/auth' , authRoute);
module.exports = router;
