//app.js

const http = require('http'); //allow us to use http and it's methods
const express = require('express'); //allow us to use express and it's methods
const bodyParser = require('body-parser'); //allow us to use body-parser and it's methods

const app = express();//initialize express

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/hackathonRoute');
routes(app)
const server = http.createServer((req, res) => {
    res.end(`
       
    `);
});
//initialize the variables to allow us to access the serv
const hostname = '127.0.0.1';
const port = 3600;

app.listen(port, hostname);
