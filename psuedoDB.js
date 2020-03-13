const Student = require('./student');

let studentList = [];

function createStudent(student) {
    studentList.push(student)
}

function getAllStudents() {
    return studentList;
}

function getStudentById(id) {

    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id === id) {
            return studentList[i];
        }
    }
    return null;
}

function updateStudentById(id, student) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id == id) {
            studentList[i] = student;
        }
    }
}

function deleteStudentById(id) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id == id) {
            studentList.splice(i, 1);
        }
    }
}

module.exports = {
    createStudent,
    getAllStudents,
    updateStudentById,
    deleteStudentById
}