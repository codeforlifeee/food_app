// index.js

const express = require('express');
const app = express();
const port = 5000;
const connectToMongoDB = require("./db");

connectToMongoDB(); // Call the async function to connect to MongoDB

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
