const express = require('express');
const controller = require('../Controller/ReadFile');

const router = express.Router();

router.get('getfields',controller);

module.exports = router;