const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const apiRoutes = require('./routes/api');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api', apiRoutes);

const server = app.listen(8080);