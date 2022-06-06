const express = require('express');
const authService = require('./../auth/authService');

const router = express.Router();

router.route('/login').post(authService.login);

router.route('/logout').post(authService.logout);

module.exports = router;
