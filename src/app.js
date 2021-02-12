const express = require('express')
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const methodOverride = require('method-override');

const publicPath = path.resolve(__dirname, '../public');
//app.use('/static',express.static(publicPath));
app.use(express.static(publicPath));


app.listen(3030, ()=>{
    console.log("servidor corriendo");
})

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views/'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride("_method"));

// app.use((req, res, next) => {
//     res.status(404).render('pages/not-found');
// })

//Routes
const mainRouter = require('./routes/main');
const productRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');



app.use(mainRouter);
app.use('/productos', productRouter);
app.use('/usuarios', usersRouter);
app.use('/admin', adminRouter)