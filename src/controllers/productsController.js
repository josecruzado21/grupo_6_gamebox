  
const path = require('path');
let productsController = {
    product: (req, res) => {
        let title = 'Gamebox | Producto ';
     
        res.render('pages/products/productDetail', {
            'title': title
        })
    },

    list: (req, res) => {
       
        let title = 'Gamebox | Lista de Productos ';
        
         res.render('pages/products/productList', {
             'title': title
         })
    },
    create: (req, res) => {
       
        let title = 'Gamebox | Crear Producto ';
     
         res.render('pages/products/productCreate', {
             'title': title
         })
    },
    edit: (req, res) => {
       
        let title = 'Gamebox | Editar Producto ';
       
         res.render('pages/products/productEdit', {
             'title': title
         })
    },
}

module.exports = productsController;