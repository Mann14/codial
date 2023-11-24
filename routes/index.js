const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("Router loaded");

router.get('/',homeController.home);//controll home request 
router.use('/users',require('./users'));//controll all user requestsy
//for any further routes access from here
// router.use('/lawyer',require('./lawyer'));
module.exports = router;