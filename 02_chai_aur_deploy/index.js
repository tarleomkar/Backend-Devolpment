// console.log("Chai aur code");
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('Omkar Tarle X.com!');
});

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
});

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at Chai aur code</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
