// ----------------ALL ROUTERS---------------------

const express = require('express');
const app = express();
const mongoose = require('mongoose');
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

const createdb = () => {
   try {
      mongoose.connect('mongodb+srv://amitkumarsingh1482:amit1234@first-c.2z2tzps.mongodb.net/db').then(() => console.log("DB Connected!!")).
      catch((err) => console.log({ "Error": err }));
   } catch(error) {
      console.log(`Connection Error: ${error}`);
   } 
}
createdb();
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
