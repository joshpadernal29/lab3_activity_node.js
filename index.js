const express = require('express');
const app = express();
const port = 3000;

// serve static files from the public folder
app.use(express.static('public'));

// define route for home page
app.get('/', (req, res) => {
    res.send("hello world!");
});

// adding new route for get and post request
// get request
app.get('/about', (req, res) => {
    res.send('About us');
});

// post request
app.use(express.json()); // parse json bodies

app.post('/submit', (req,res) => {
    const data = req.body;
    res.send(`Data Recieved: ${JSON.stringify(data)}`);
});

// start server
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});