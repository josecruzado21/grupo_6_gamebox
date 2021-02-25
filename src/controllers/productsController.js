list_productos = [{ nombre: 'Play Station 5', precio: '$2,500,000', imagen: '/images/ps5-controller.png', descripcion: 'Experimenta una carga increíblemente rápida con un SSD de ultra alta velocidad, inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D, y una nueva generación de increíbles juegos de PlayStation.' },
{ nombre: 'XBOX Series X', precio: '$2,300,000', imagen: '/images/xbox-controller.png', descripcion: 'La Xbox más rápida y potente de la historia. Juega a miles de títulos de cuatro generaciones de consolas: todos los juegos tienen el mejor aspecto y se juegan mejor en Xbox Series X.' },
{ nombre: 'Nintendo Switch', precio: '$1,730,000', imagen: '/images/nintendo_switch_console.jpg', descripcion: 'La consola Nintendo Switch está diseñada para acompañarte dondequiera que vayas, transformándose de consola para el hogar a consola portátil en un instante. Así tendrás más ocasiones para disfrutar de tus juegos favoritos como más te guste.' },
{ nombre: 'Cyberpunk 2077', precio: '$170,000', imagen: '/images/cyberpunk-cover.png', descripcion: 'Basado en el famoso y alabado juego de rol clásico de lápiz, papel y dados, CD Projekt RED cambia la espada y brujería de The Witcher por los entornos futuristas, las armas de fuego y láser y los implantes biomecánicos de Cyberpunk 2077, un RPG de acción para PC, PlayStation 4, Xbox One y Stadia de mundo abierto basado en el universo del clásico juego de rol de Mike Pondsmith, Cyberpunk 2020.' },
{ nombre: 'The last of us part 2', precio: '$170,000', imagen: '/images/the_last_of_us_2_game.jpg', descripcion: 'El juego sigue a Ellie, la niña que era la protagonista secundaria y la compañera del personaje del jugador en The Last of Us. El juego se desarrolla cinco años después del final del original. Tanto Ellie (que ahora tiene 19 años) como Joel sobrevivieron y viven en Jackson, Wyoming, donde Ellie está saliendo con otra chica, Dina. Sin embargo, los personajes tienen que lidiar con el culto malvado llamado Serafitas, que intentan sacrificar a sus antiguos miembros. Una cuestión de venganza obliga a Ellie y sus amigos a emprender un viaje a Seattle, Washington, para matar a sus enemigos. El tema principal de la trama es cómo Ellie se enfrenta a sus problemas de odio.' },
{ nombre: 'FIFA 21', precio: '$160,000', imagen: '/images/fifa_21_game.jpg', descripcion: 'Alcanza la gloria conjunta en EA SPORTS™ FIFA 21, con el poder de Frostbite™. Ya sea en las calles o en el estadio, FIFA 21 te ofrece más formas de jugar que nunca, incluidas la UEFA Champions League y la CONMEBOL Libertadores.' },
{ nombre: 'Super Mario 3D World + Browsers Fury', precio: '$250,000', imagen: '/images/super_mario_3d_world_game.jpg', descripcion: '¡Únete a Mario, Luigi, Peach y Toad en su misión para salvar el reino de las hadas en Super Mario 3D World + Bowser’s Fury para Nintendo Switch! Rescata a la princesa hada y a sus amigas, en solitario o con hasta 3 jugadores más, en esta versión mejorada de Super Mario 3D World. Y después, también en solitario o con un amigo, ayuda a Bowser Jr. a devolver a su papi a la normalidad en una aventura totalmente nueva: ¡Bowsers Fury!' },
{ nombre: 'Monitor MSI Optix G27C2 PC Gaming Curvo 27 pulgadas', precio: '$1,800,000', imagen: '/images/monitor_msi.jpg', descripcion: 'Juega en primer nivel con el monitor gaming curvo Optix G27C2. Equipado con tasa de actualización de 144Hz, tiempo de respuesta de 1ms y panel VA, Optix G27C2 te ayudará a ver a tus oponentes y apuntar con facilidad. Con la tecnología de sincronización adaptable AMD Freesync, G27C2 puede sincronizar la tasa de actualización de la pantalla con la de la GPU para un juego ultra fluido. Podrás dar en el blanco perfecto con las últimas tecnologías integradas en el monitor Optix G27C2 para el mejor juego competitivo.' },
{ nombre: 'Hyperx Cloud Stinger PS4', precio: '$300,000', imagen: '/images/hyperx_cloud_stinger_core_ps4.jpg', descripcion: 'Los HyperX Cloud Stinger Core para PS4 son los audífonos básicos perfectos para el gamer de consola que busca gran calidad de sonido a un precio imbatible. Compatibilidad multiconsola y controles de audio en el cable. Su deslizador de metal ajustable y las suaves almohadillas brindan gran comodidad, y el micrófono flexible y giratorio te permite ubicarlo en el lugar que desees.' },
{ nombre: 'Primus Silla Gamer: Thrónos 200S - Negro', precio: '$1,200,000', imagen: '/images/silla_gamer_tronos.jpg', descripcion: 'Las butacas de la línea Thrónos 200S han sido creadas para darte extrema comodidad y muchísimo comfort en cualquier escenario. La Thrónos 200S es perfecta para jugar muy bien por horas y también para largos periodos de trabajo o estudio. Su construcción robusta, cuerina de primera, remates de costura doble y con materiales resistentes aseguran máxima estabilidad y duración; es una muy buena inversión. ' }]

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

        res.render('pages/products/productDetail', {
            title: title + productFound.name,
            product : productFound
        })
    },

    list: (req, res) => {

        let title = 'Gamebox | Lista de Productos ';

        res.render('pages/products/productList', {
            title: title, list_productos: list_productos
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
            'hasEdition': req.body.hasEdition,
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
        
        
        console.log('To create: ')
        console.log(product)

        
        //ToDo save in database logic 
      res.redirect("/productos/"+product.category+"/"+product.id)
    },

    edit: (req, res) => {
        let title = 'Gamebox | Editar Producto ';
        let product = null;

        //ToDo Logic to search in database and preload the form with the product to edit
        console.log("Param Id:" + req.params.id);
        //Example
        product = {
            "id": req.params.id,
            'productName': "The last of us",
            'price': 147000,
            'category': "Juegos",
            'subcategory': "PS4",
            'type': "Roto",
            'hasEdition': true,
            'edition': "Standard",
            'stock': 10,
            'principalImg': "",
            'secondaryImg': ""
        }

        res.render('pages/products/productCreate', {
            'title': title,
            'product': product
        })
    },


    update: (req, res) => {
        let product = null;
        product = {
            'productName': req.body.name,
            'price': req.body.name,
            'category': req.body.name,
            'subcategory': req.body.name,
            'type': req.body.name,
            'hasEdition': req.body.name,
            'edition': req.body.name,
            'stock': req.body.stock,
            'principalImg': req.body.principalImg,
            'secondaryImg': req.body.secondaryImg
        }

        console.log('To Update: ')
        console.log(product)

        //ToDo Update in database logic 
        res.redirect("/")
    },
}

module.exports = productsController;