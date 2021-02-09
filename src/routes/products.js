  
const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.list)
router.get('/:id', productsController.product);
router.get('/crear', productsController.create);
router.get('/editar/:id', productsController.edit);

module.exports = router;