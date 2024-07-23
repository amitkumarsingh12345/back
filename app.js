// ----------------ALL ROUTERS---------------------

const express = require('express');
const app = express();
const mongo = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./router/user');
const admin = require('./router/admin');
const path = require("path");
const category = require('./router/category');
const product = require('./router/product');
const order = require('./router/order');
const cors = require('cors');
app.use(cors());

// ----------------DATABASE CONNECTION---------------------

mongo.connect("mongodb+srv://Amitkumarsingh:amit1234@testdb.gk0sdgg.mongodb.net/test").
  then( () => console.log("Database Created!!"));

app.use(bodyParser.json());

app.use('/api/v1', user);
app.use('/api/v2', admin);
app.use('/api/v3', category);
app.use('/api/v4', product);
app.use('/api/v5', order);

app.use(express.static(path.join(__dirname, 'frontcode/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontcode/build/index.html'));
});

// app.get("*", (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "frontcode", "build")));
//     res.sendFile(path.resolve(__dirname, "frontcode", "build", "index.html"));
// });

// ----------------SERVER CONNECTION---------------------

app.listen(11000, () => console.log("Server Created !!"));
