const express = require('express');
const { getAllStudents, getStudentById, addStudent, updateStudentById, deleteStudentById } = require('../controllers/student');
const studentRouter = express.Router();
//getAllStudents, getStudentById, addStudent, updateStudentById, deleteStudentById


studentRouter.get('', getAllStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.post('', addStudent);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);

module.exports = studentRouter;