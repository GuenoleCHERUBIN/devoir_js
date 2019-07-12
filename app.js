const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/hackathonRoute');
routes(app)
const server = http.createServer((req, res) => {
    res.end(`
       
    `);
});
const hostname = '127.0.0.1';
const port = 3600;

app.listen(port, hostname);
