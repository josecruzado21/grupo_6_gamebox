const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.list)
router.get('/:category/:id', productsController.product);




module.exports = router;