const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//midellware es una instruccion o un callback que se va a ejecutar siempre 
// no importa cual sea el url
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



app.get('/', (req, res) => { //peticion get cuando el path sea /


    //para que sea un servicio 
    res.render('home', {
        nombre: 'juan',
        //anio: new Date().getFullYear()
    });
    //que se obtenga el objeto json
})

app.get('/about', (req, res) => { //peticion get cuando el path sea /


    //para que sea un servicio 
    res.render('about', {
        nombre: 'juan',
        //anio: new Date().getFullYear()
    });
    //que se obtenga el objeto json
})


app.get('/data', (req, res) => { //peticion get cuando el path sea /
    res.send('hola data');
})

app.listen(port, () => {
    console.log(`scuchando peticiones en el puerto ${ port}`);
});