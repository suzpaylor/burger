// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
//added 4
var methodOverride = require('method-override');
//just added line 5

var port = process.env.PORT || 3000;

var app = express();

// i hate you heroku
//app.use(express.static(path.join(__dirname, '../public')));
// Serve static content for the app from the 'public' directory

//app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
//added line 20*********
app.use(express.static(path.join(__dirname, './public')));
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);