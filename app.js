//Express
const express = require('express');
const app = express();

//Own modules
const db = require('./psuedoDB');
const Student = require('./student');

//Debug section DELETE
let stud1 = new Student(1, 'Frederik', 'Lundbeck Jørgensen', ['Node.js', 'C', 'Hardcore Python']);
let stud2 = new Student(2, 'Mathias', 'Sørensen', ['Padc', 'Android', 'iOS']);
let stud3 = new Student(3, 'Andreas', 'Kepp', ['C', 'Node.js', 'Java']);
let stud4 = new Student(4, 'Kenny', 'Petersen', ['Python Beginner', 'Padc', 'C']);

db.createStudent(stud1);
db.createStudent(stud2);
db.createStudent(stud3);
db.createStudent(stud4);

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

app.get('/docs', (req, res) => {
    res.sendFile(__dirname + '/static/html/docs.html');
});

app.get('/docs/basics', (req, res) => {
    res.sendFile(__dirname + '/static/html/basics.html');
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
