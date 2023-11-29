const express = require('express');
const studentRouter = require('./student');
const v1Router =  express.Router();

v1Router.use('/students', studentRouter); //all the '/student' path will go to the studentRrouter

module.exports = v1Router;