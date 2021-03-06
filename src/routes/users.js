const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();


router.get('/perfil/:id', usersController.profile);

module.exports = router;