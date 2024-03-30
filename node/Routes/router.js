const express = require('express');
const controller = require('../Controller/ReadFile');
const writecontroller = require('../Controller/WriteFile');

const router = express.Router();

router.get('/getfields',controller.readFileFn);

router.post('/postData',writecontroller.WriteFileFn);

module.exports = router;