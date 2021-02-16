
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
<<<<<<< HEAD

        res.render('pages/products/productCreate', {
            'title': title
        })
=======
     
        let product = null;

         res.render('pages/products/productCreate', {
             'title': title,
             'product':product
         })
>>>>>>> 20e1fa574ea3ff983999199b67b525e72edd950d
    },
    save: (req, res) => {
       
        let product = null;

        product = {
            'productName':req.body.name,
            'price':req.body.name,
            'category':req.body.name,
            'subcategory':req.body.name,
            'type':req.body.name,
            'hasEdition':req.body.name,
            'edition':req.body.name,
            'stock':req.body.stock,
            'principalImg':req.body.principalImg,
            'secondaryImg':req.body.secondaryImg

        }
         console.log('To create: ')
         console.log(product)
        //ToDo Update in database logic 

        res.redirect("/")
    },

    edit: (req, res) => {
<<<<<<< HEAD

        let title = 'Gamebox |Editar Producto ';

        res.render('pages/products/productEdit', {
            'title': title
        })
=======
       
        let title = 'Gamebox | Editar Producto ';
       

        let product = null;

         //ToDo Logic to search in database and preload the form with the product to edit
         console.log("Param Id:" + req.params.id);
         //Example
         product = {
            "id":req.params.id,
            'productName':"The last of us",
            'price':147000,
            'category':"Juegos",
            'subcategory':"PS4",
            'type':"Roto",
            'hasEdition':true,
            'edition':"Standard",
            'stock':10,
            'principalImg':"",
            'secondaryImg':""
        }





        res.render('pages/products/productCreate', {
            'title': title,
            'product':product
        })


        
    },


    update: (req, res) => {
       
        let product = null;

        product = {
            'productName':req.body.name,
            'price':req.body.name,
            'category':req.body.name,
            'subcategory':req.body.name,
            'type':req.body.name,
            'hasEdition':req.body.name,
            'edition':req.body.name,
            'stock':req.body.stock,
            'principalImg':req.body.principalImg,
            'secondaryImg':req.body.secondaryImg
        }

        console.log('To Update: ')
        console.log(product)
        
        //ToDo Update in database logic 
       
         res.redirect("/")
>>>>>>> 20e1fa574ea3ff983999199b67b525e72edd950d
    },
}

module.exports = productsController;