//Express
const express = require('express');
const app = express();

//Own modules
const db = require('./psuedoDB');
const Student = require('./student');

const port = 8080;


//Set up static directory routing

app.use(express.static('./static/'));

//HTML file routing

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/static/html/about.html');
});

app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/static/html/api.html');
});

//Docs specific endpoints

app.get('/docs/overview', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/overview.html');
});

app.get('/docs/node', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/nodebasics.html');
});

app.get('/docs/variables', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/variables.html');
});

app.get('/docs/functions', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/functions.html');
});

app.get('/docs/objects', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/objects.html');
});

app.get('/docs/modules', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/modules.html');
});

app.get('/docs/jquery', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/jquery.html');
});

app.get('/docs/nodemon', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/nodemon.html');
});

app.get('/docs/express', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/express.html');
});

app.get('/docs/ajax', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/ajax.html');
});

app.get('/docs/npm', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/npm.html');
});

app.get('/docs/http', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs/http.html');
});

//Api routing

app.use(express.json());

const api_prefix = '/api';

app.get(api_prefix + '/students', (req, res) => {
    let students = { 'students' : db.getAllStudents() };
    res.json(students);
});

app.post(api_prefix + '/students', (req, res) => {
    
    let json = req.body;

    if (json.hasOwnProperty('id') &&
        json.hasOwnProperty('firstName') &&
        json.hasOwnProperty('lastName') &&
        json.hasOwnProperty('classes')) {
        
            let student = new Student(json.id, json.firstName, json.lastName, json.classes);
            db.createStudent(student);
            res.redirect('/api/students');
            return;
    }

    res.json({
        "error" : {
            "status" : "Invalid argument"
        }
    });
});

app.listen(port, () => {
    console.log('Express server started on port', port);
});
