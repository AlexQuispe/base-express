var express =     require('express');
var path =        require('path');
var favicon =     require('serve-favicon');
var bodyParser =  require('body-parser');

// RUTAS
var index = require('./src/routes/index');
var users = require('./src/routes/users');

// Crea el servidor
var app = module.exports = express();
var port = process.env.PORT || 8000;

// Asignación del motor de vistas
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Configura el servidor
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Asignación de CONTROLADORES a las RUTAS
app.use('/', index);
app.use('/users', users);

// Ejecutamos el servidor
if (!module.parent) {
  app.listen(port, function() {
    console.log('La aplicación esta ejecutandose en http://localhost:%s/', port);
  });
}
