require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./server/router/router');

const port = process.env.PORT;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todo', { useMongoClient: true});

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`); 
});