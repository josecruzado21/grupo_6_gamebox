const express = require('express');
const cartController = require('../controllers/cartController');
const mainController = require('../controllers/mainController');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/', mainController.home);
router.get('/carrito-de-compras', cartController.cart);
router.get('/login', usersController.login);
router.get('/registro', usersController.register);

module.exports = router;