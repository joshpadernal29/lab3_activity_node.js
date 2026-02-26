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

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Data Recieved: ${JSON.stringify(data)}`);
});


// route for displaing a list of items
const items = ['apple', 'bannana', 'orange'];
// get items
app.get('/items', (req, res) => {
    res.json(items);
});

// post items
app.post('/items', (req, res) => {
    const newItem = req.body.item; // store the data from the input
    console.log("Adding new item:", newItem);
    items.push(newItem); // add the input item to the items list
    res.json(items);
});



//  testing  the error handler
app.get('/test-error', (req, res) => {
    throw new Error("");
});

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});


// start server
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});