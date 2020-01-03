var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;
var fs = require('fs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/checkUser', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    if (email.match("Admin") && password.match("Admin")) {
        res.send('OK');
        console.log('user logged in');
    } else {
        res.send('Bad');
        console.log('user faild to log in');
    }

});

app.post('/newUser', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    if (email.match("Admin@gmail.com")) {
        res.send('This User already exist.');
    } else {
        res.send('OK');
        //TODO SEND MAIL
        console.log('New User Signed up - ' + email);
    }

});

app.post('/contactusSent', function(req, res) {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;

    //TODO SEND MAIL

    if (true /*mail sent - send ok*/ ) {
        res.send('OK');
    } else {
        res.send('BAD');
    }

});

app.get('/contactpage', function(req, res) {
    console.log("Login Made.");
    fs.readFile("ContactPage.html", "UTF-8", function(err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });
});
app.get('/SignUpPage.html', function(req, res) {
    fs.readFile("SignUpPage.html", "UTF-8", function(err, html) {
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