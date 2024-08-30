const controllers = require('./controllers/controllers');
const express = require('express');
    
const router = express.Router();

router.get('/', controllers.processFormAnswers);
router.post('/', controllers.processFormAnswers);

module.exports = router;
