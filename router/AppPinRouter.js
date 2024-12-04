const express = require('express');
const router = express.Router();
const { 
    getAppPins, 
    getAppPinById 
} = require('../controller/AppPinController');

router.get('/', getAppPins); 
router.get('/:id', getAppPinById); 

module.exports = router;
