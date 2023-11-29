//crud


//get student model
const Student = require('../models/Student');



async function getAllStudents(req, res) {
    console.log("student.find----")
    //query, can add query chain
    //const students = await Student.find().exec();//resturn all the students with all the fields

    //select some specific fields
    const query = Student.find();
    if (process.env.NODE_ENV === 'development') {
        query.select('firstName lastName');
    } else {
        query.select('firstName lastName email');
    }
    const students = await query.exec();
    //follow the standard when returning data
    /**
     * {
     * data: [],
     * error:"",
     * message: "",
     * }
     */

    return res.json(students);
}

async function getStudentById(req, res) {
    const { id } = req.param;
    const student = await Student.findById(id).exec();
    if (!student) {
        res.status(404).json({ message: 'Student not found' });
    } else {
        res.status(200).json(student);
    }

}
async function addStudent(req, res) {
    console.log("req.body----", req.body)//use postman to test the post request
    const { firstName, lastName, email } = req.body;
    const newStudent = new Student({ firstName, lastName, email });
    const student = await newStudent.save();
    return res.status(201).json(student);

}

function updateStudentById(req, res) {

}

function deleteStudentById(req, res) {

}

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById
};