const express = require('express')
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use('/static',express.static(publicPath));

app.listen(3030, ()=>{
    console.log("servidor corriendo");
})

// set the view engine to ejs
app.set('view engine', 'ejs');

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './views/index.html'));
// })

app.get('/', (req,res) => {
    res.render('pages/index');
})

app.get('/registro', (req,res) => {
    //res.sendFile(path.resolve(__dirname, './views/register.html'));
    res.render('pages/register');
})

app.get('/login', (req,res) => {
   // res.sendFile(path.resolve(__dirname, './views/login.html'));
    res.render('pages/login');
})

app.get('/carrito-de-compras', (req,res) => {
   // res.sendFile(path.resolve(__dirname, './views/productCart.html'));
    res.render('pages/productCart');
})

app.get('/detalle', (req,res) => {
   // res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
    res.render('pages/productDetail');
})