function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks") === true) {
    this.marks.push(...marks);
  } else {
    return;
  }
};

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    return 0;
  }
  return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
