  
const path = require('path');
const cartController = {
    cart: (req, res) => {
        let title = 'Carrito de Compras';
        res.render('pages/productCart', {
            'title': title
        });
    }
};

module.exports = cartController;