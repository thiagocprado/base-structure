const express = require('express');
const example = require('./../example/exampleService');
const router = express.Router();
// const { ensureAuthentication } = require('./../auth/authService');

//router.use(ensureAuthentication);
router.route('/:id').get(example.get).put(example.edit).delete(example.delete);
router.route('/').get(example.get).post(example.save);

module.exports = router;
