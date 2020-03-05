const express = require('express')
const app = express()
const port = 8080


//Set up static directory routing

app.use(express.static('./static/'))

//HTML routing

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/static/html/about.html')
})

app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/static/html/api.html')
})

const api_prefix = '/api'

app.get(api_prefix + '/students', (req, res) => {
    res.json({
        "status" : "200"
    })
})

app.post(api_prefix + '/students', (req, res) => {
    res.redirect('/api/students')
})

app.listen(port, () => {
    console.log('Express server started on port', port)
})