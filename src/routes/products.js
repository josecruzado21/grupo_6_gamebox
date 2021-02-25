const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/productsController');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        const newFilename = file.originalname;
        cb(null, newFilename);
    }
});

let upload = multer({ storage });


router.get('/', productsController.list)
router.get('/:category', productsController.list)
router.get('/:category/:id', productsController.product);
router.get('/crear', productsController.create);
router.get('/:category/:id/editar', productsController.edit);


router.post('/crear', upload.any() ,productsController.save);
router.put('/editar/:id',  upload.any(),productsController.update);
router.put('/eliminar/:id',productsController.delete);

module.exports = router;