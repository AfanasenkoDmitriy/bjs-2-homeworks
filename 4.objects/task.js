function Student(name, gender, age) {
    this.name;
    this.gender;
    this.age;
    this.marks;

}

Student.prototype.setSubject = function (subjectName) {
    const student = new Student(Student.name, Student.gender, Student.age)
}

Student.prototype.addMarks = function (...marks) {
    Student.addMarks = marks;
}

Student.prototype.getAverage = function () {
    Student.getAverage = '';
}

Student.prototype.exclude = function (reason) {
    Student.exclude = reason;
}
