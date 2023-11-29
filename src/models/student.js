//Schema, model
const { Schema, model } = require('mongoose');
//firstName, lastName, email, courses


//define a schema for the student model
const schema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

//create the student model using the schema
const Model = model('Student', schema);
module.exports = Model;