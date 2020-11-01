const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController');

router.route('/')
    .get(defaultController.index);

router.route("/register")
    .post(defaultController.registerPost)

router.route("/login")
    .post(defaultController.loginPost);

module.exports = router;