/**
 * The personal website at www.iaincollins.com
 * @author      me@iaincollins.com
 */

var express = require('express');
var partials = require('express-partials');
var ejs = require('ejs');
var fs = require('fs');
var magicball = require('magicball');

// Initialise and configure Express and Express Partials
var app = express();
app.use(express.static(__dirname + '/public'))
app.use(partials());
app.set('title', 'iaincollins.com');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);
partials.register('.ejs', ejs);

/**
 * The homepage
 */
app.get('/', function(req, res, next) {
    res.render('index', { template: "home", theme: 'blue', title: 'home', quote: magicball.ask() });
});

/**
 * Software
 */
app.get('/software', function(req, res, next) {
    res.render('software', { template: "software", theme: 'green', title: 'software', quote: magicball.ask() });
});

/**
 * Contact
 */
app.get('/contact', function(req, res, next) {
    res.render('contact', { template: "contact", theme: 'orange', title: 'contact', quote: magicball.ask() });
});

/**
 * Other pages
 */
app.get('/:pageName', function(req, res, next) {
    var template = req.params.pageName.replace( /[^A-z0-9_-]/ , '');
    fs.exists('./views/'+template+'.ejs', function(exists) {
        if (exists) {
            res.render(template, { template: template, theme: 'blue',  title: template, quote: magicball.ask() });
        } else {
            pageNotFound(req, res);
        }
    });
});

/**
 * Handle all other requests as 404 / Page Not Found errors
 */
app.use(function(req, res, next) {
    pageNotFound(req, res);
});

function pageNotFound(req, res) {
    res.status(404).render('page-not-found', { template: null, theme: 'red', title: 'page not found', quote: magicball.ask() });
}

app.listen(3004);