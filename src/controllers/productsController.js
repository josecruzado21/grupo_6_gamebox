list_productos=[{nombre:'Cyberpunkkkk 2077',precio:'$170,000',descipcion:'Basado en el famoso y alabado juego de rol clásico de lápiz, papel y dados, CD Projekt RED cambia la espada y brujería de The Witcher por los entornos futuristas, las armas de fuego y láser y los implantes biomecánicos de Cyberpunk 2077, un RPG de acción para PC, PlayStation 4, Xbox One y Stadia de mundo abierto basado en el universo del clásico juego de rol de Mike Pondsmith, Cyberpunk 2020.'},
{nombre:'The last of us part 2',precio:'$170,000',descripcion:'El juego sigue a Ellie, la niña que era la protagonista secundaria y la compañera del personaje del jugador en The Last of Us. El juego se desarrolla cinco años después del final del original. Tanto Ellie (que ahora tiene 19 años) como Joel sobrevivieron y viven en Jackson, Wyoming, donde Ellie está saliendo con otra chica, Dina. Sin embargo, los personajes tienen que lidiar con el culto malvado llamado Serafitas, que intentan sacrificar a sus antiguos miembros. Una cuestión de venganza obliga a Ellie y sus amigos a emprender un viaje a Seattle, Washington, para matar a sus enemigos. El tema principal de la trama es cómo Ellie se enfrenta a sus problemas de odio.'},
{nombre:'FIFA 21',precio:'$160,000',descripcion:'Alcanza la gloria conjunta en EA SPORTS™ FIFA 21, con el poder de Frostbite™. Ya sea en las calles o en el estadio, FIFA 21 te ofrece más formas de jugar que nunca, incluidas la UEFA Champions League y la CONMEBOL Libertadores.'}]
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
             title: title,list_productos:list_productos
         })
    },
    create: (req, res) => {
       
        let title = 'Gamebox | Crear Producto ';
     
        let product = null;

         res.render('pages/products/productCreate', {
             'title': title,
             'product':product
         })
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
    },
}

module.exports = productsController;