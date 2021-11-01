const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Alberto Rodriguez',
        titulo: 'Web Node Example'
    });
})

app.get('/generic', (req, res) =>{
    res.render('generic', {
        nombre: 'Alberto Rodriguez',
        titulo: 'Generic Page',
    });
})
app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Alberto Rodriguez',
        titulo: 'Elements Page',
    });
})


// app.get('*', (req, res) =>{
//     res.sendFile(__dirname + '/public/404.html');
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})