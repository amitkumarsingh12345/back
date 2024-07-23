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

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://amitkumarsingh1482:<password>@divya123.fkj6pj9.mongodb.net/?retryWrites=true&w=majority&appName=Divya123";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();

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
