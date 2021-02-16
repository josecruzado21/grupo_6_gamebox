  
const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();


router.get('/productos/crear', productsController.create);
router.post('/productos/crear', productsController.save);
router.get('/productos/editar/:id', productsController.edit);
router.put('/productos/editar/:id', productsController.update);

module.exports = router;