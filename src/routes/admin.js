const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');




router.get('/productos/crear', productsController.create);
router.get('/productos/:id', productsController.edit);



module.exports = router;