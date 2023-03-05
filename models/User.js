const mongoose = require('mongoose');

// TODO: Add a comment describing the functionality of the code below
// create a mongoose schema for the books with the following properties
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true }, // title must be present to add a book to database
  lastName: { type: String, required: true }, // author is not required
  username: { type: String, required: true }, 
  email: { type: String, required: true }, 
  location: { type: String, required: true }, 
  allergies: { type: String, required: true }, 
  birthDate: Number,
  accountCreated: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
// defines a variable that creates object of book schema titled 'book'
// creates the model for book based on the book schema
const User = mongoose.model('user', userSchema); // create an object of the schema

const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
// Add a book to the book database
User.create(
  {
    firstName: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = User;
// exports 