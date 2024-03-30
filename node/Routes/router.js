const express = require('express');
const controller = require('../Controller/ReadFile');

const router = express.Router();

router.get('/getfields',controller.readFileFn);

router.post('/postData',controller.readFileFn);

module.exports = router;