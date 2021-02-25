
const path = require('path');
const fs = require('fs');

const productsPath = path.resolve(__dirname, '../data/products.json');


let productsController = {
    product: (req, res) => {
        let title = 'Gamebox | ';
        let id = parseInt(req.params.id);

        let products = fs.readFileSync(productsPath, 'utf-8');
        products = JSON.parse(products);

        let productFound = products.find( product => product.id === id);


        if(productFound == null || productFound == undefined ){
            res.render('pages/products/productNotFound', {
                'title': 'Sin resultados',
                'description':'Producto no encontrado'
            })
        }

        res.render('pages/products/productDetail', {
            title: title + productFound.name,
            product : productFound
        })
    },

    list: (req, res) => {

        let title = 'Gamebox | Lista de Productos ';

        let products = fs.readFileSync(productsPath, 'utf-8');
        products = JSON.parse(products);
       
        if(products == null || products == undefined || products.length < 1){
            res.render('pages/products/productNotFound', {
                'title': 'Sin resultados',
                'description':'Lo sentimos no encontramos productos'
            })
        }


        console.log("Params: ")
        console.log(req.params);

        let category = req.params.category;

            if(category !== null && category !== undefined ){


            let productsFound =  products.filter(f => f.category == category);
            
            if(productsFound == null || productsFound == undefined || productsFound.length < 1){
                res.render('pages/products/productNotFound', {
                    'title': 'Sin resultados',
                    'description':'Lo sentimos no encontramos productos para la categoria: ' + category
                })
                }

                
            console.log("Productos encontrados :" );
            console.log(productsFound.length);

            products = productsFound;
            }



           products.sort(function(a, b){return b.id - a.id});

           res.render('pages/products/productList', {
            title: title, 
            products:products
            })
       


    },

    create: (req, res) => {

        let title = 'Gamebox | Crear Producto ';

        let product = null;

        res.render('pages/products/productCreate', {
            title: title,
            product: product
        })
    },

    save: (req, res) => {
       let files =  req.files;
       console.log(files);
       let mainImage = files.find(f=>f.fieldname == 'mainImage')
       console.log(mainImage)
       let secondImage = files.find(f=>f.fieldname == 'secondImage')
       console.log(secondImage)


        let products = fs.readFileSync(productsPath, 'utf-8');
        products = JSON.parse(products);

        let product = null;

        let editionArr = req.body.edition.split(',')
      
        product = {
            'id':products.length +1,
            'name': req.body.name,
            'price': req.body.price,
            'description':req.body.description,
            'hasEdition': req.body.hasEdition == 'true' ? true : false,
            'edition': editionArr,
            'isNew':req.body.type == 'nuevo' ? true : false,
            'category': req.body.category,
            'subcategory': req.body.subcategory,
            'stock': req.body.stock,
            'mainImage': mainImage.originalname,
            'secondImage': secondImage.originalname,
            'rawApi':null
        }

        console.log("Producto a crear: ");
        console.log(product)

        products.push(product);
        productsFinal = JSON.stringify(products);
        fs.writeFileSync(productsPath, productsFinal);
        
  
      res.redirect("/productos/"+product.category+"/"+product.id)
    },

    edit: (req, res) => {
        let title = 'Gamebox | Editar Producto ';
        let product = null;
        let id = parseInt(req.params.id);
        
        console.log("Param Id: " + req.params.id);

        let products = fs.readFileSync(productsPath, 'utf-8');
        products = JSON.parse(products);

        let productFound = products.find( f => f.id == id);

        console.log(productFound);

        if(productFound == null || productFound == undefined){
            res.render('pages/not-found', {
                'title': 'Pagina no encontrada',
            })
        }

        product = {
            "id": id,
            'name': productFound.name,
            'price': productFound.price,
            'category': productFound.category,
            'description': productFound.description,
            'subcategory': productFound.subcategory,
            'type': productFound.isNew == true ? 'nuevo' : 'usado',
            'hasEdition': productFound.hasEdition == true ? 'true' : 'false',
            'edition': productFound.edition.join(','),
            'stock': productFound.stock,
            'mainImage': productFound.mainImage,
            'secondImage': productFound.secondImage
        }

        res.render('pages/products/productCreate', {
            'title': title,
            'product': product
        })
    },


    update: (req, res) => {
       let id = parseInt(req.params.id);
      
        let files =  req.files;
        console.log(files);
        let mainImage = files.find(f=>f.fieldname == 'mainImage')
        console.log(mainImage)
        let secondImage = files.find(f=>f.fieldname == 'secondImage')
        console.log(secondImage)
       
        let products = fs.readFileSync(productsPath, 'utf-8');
        products = JSON.parse(products);

        let product = null;

        let editionArr = req.body.edition.split(',')
      
        product = {
            'id':id,
            'name': req.body.name,
            'price': req.body.price,
            'description':req.body.description,
            'hasEdition': req.body.hasEdition == 'true' ? true : false,
            'edition': editionArr,
            'isNew': req.body.type == 'nuevo' ? true : false,
            'category': req.body.category,
            'subcategory': req.body.subcategory,
            'stock': req.body.stock,
             'mainImage': mainImage.originalname,
             'secondImage': secondImage.originalname,
            'rawApi':null
        }

        console.log('To Update: ')
        console.log(product)

        //Obtengo el indice del producto en la lista
        const i = products.map( p => p.id ).indexOf(id);

        //Lo saco de la lista
        if ( i > -1 ) {
            products.splice(i, 1);
        }

        //Vuelve a entrar a la lista
        products.push(product);
        productsFinal = JSON.stringify(products);
        fs.writeFileSync(productsPath, productsFinal);
        
  
      res.redirect("/productos/"+product.category+"/"+product.id)

    },

    delete: (req, res) => {
        let id = parseInt(req.params.id);
        let products = fs.readFileSync(productsPath, 'utf-8');
        products = JSON.parse(products);

        //Obtengo el indice del producto en la lista
        const i = products.map( p => p.id ).indexOf(id);

        //Lo saco de la lista
        if ( i > -1 ) {
            products.splice(i, 1);
        }

        productsFinal = JSON.stringify(products);
        fs.writeFileSync(productsPath, productsFinal);
        
  
        res.redirect("/productos")

    },
}

module.exports = productsController;