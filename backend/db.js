// db.js

const mongoose = require('mongoose');
const mongoDBURI = 'mongodb+srv://fooddeliveryapp:sanchit123@fooddeliveryapp.uqnn8v2.mongodb.net/?retryWrites=true&w=majority&appName=fooddeliveryapp'; // Replace with your MongoDB URI

async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoDBURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
}

module.exports = connectToMongoDB;
