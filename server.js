var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;
var fs = require('fs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*app.post('/login', function(req, res) {
    console.log('user logged in');

    var email = req.body.email;
    var password = req.body.password;
    if (email.match("Admin") && password.match("Admin")) {
        res.send('OK');
        console.log('user logged in');
    } else {
        res.send('Bad');
        console.log('user faild to log in');
    }

});*/


app.get('/contactpage', function(req, res) {
    fs.readFile("../ContactPage.html", "UTF-8", function(err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });
});

app.get('/', function(req, res) {

    fs.readFile("LogInPage.html", "UTF-8", function(err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });
});

app.get('/login', function(req, res) {
    fs.readFile("LogInPage.html", "UTF-8", function(err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });
});
app.get('/styles.css', function(req, res) {
    var fileStream = fs.createReadStream("styles.css", "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
});
app.get('/javaScript.js', function(req, res) {
    var fileStream = fs.createReadStream("javaScript.js", "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
});

// start the server
app.listen(process.env.PORT || port);
console.log('Server started!')