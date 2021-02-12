  
const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();


router.get('/productos/crear', productsController.create);
router.get('/productos/editar/:id', productsController.edit);

module.exports = router;