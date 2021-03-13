const express = require('express');
const cartController = require('../controllers/cartController');
const mainController = require('../controllers/mainController');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');

const router = express.Router();

router.get('/', mainController.home);
router.get('/carrito-de-compras', cartController.cart);
router.get('/login', guestMiddleware, usersController.login);
router.get('/registro', guestMiddleware, usersController.register);

module.exports = router; 