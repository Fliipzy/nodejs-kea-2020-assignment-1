class Student {

    constructor(id, firstName, lastName, classes) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.classes = classes;
    }

    static isValidStudentObj(studentObj) {

        if (studentObj instanceof Student) {
            return true;
        }
        return false;
    }

}

module.exports = Student;