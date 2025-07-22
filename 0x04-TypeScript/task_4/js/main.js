"use strict";
// Export constants for subjects
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
exports.cpp = {
    name: 'C++',
    teacher: null,
    getRequirements: function () {
        return 'Here are the requirements for C++.';
    },
    getAvailableTeacher: function () {
        return this.teacher ? "Available teacher: ".concat(this.teacher.firstName) : 'No teacher available';
    }
};
exports.java = {
    name: 'Java',
    teacher: null,
    getRequirements: function () {
        return 'Here are the requirements for Java.';
    },
    getAvailableTeacher: function () {
        return this.teacher ? "Available teacher: ".concat(this.teacher.firstName) : 'No teacher available';
    }
};
exports.react = {
    name: 'React',
    teacher: null,
    getRequirements: function () {
        return 'Here are the requirements for React.';
    },
    getAvailableTeacher: function () {
        return this.teacher ? "Available teacher: ".concat(this.teacher.firstName) : 'No teacher available';
    }
};
// Export one Teacher object with experienceTeachingC = 10
exports.cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};
// Function to assign teacher and log outputs for each subject
function testSubject(subject, teacher) {
    console.log(subject.name);
    subject.teacher = teacher;
    console.log(subject.getRequirements());
    console.log(subject.getAvailableTeacher());
}
// Call testSubject for each subject
testSubject(exports.cpp, exports.cTeacher);
testSubject(exports.java, exports.cTeacher);
testSubject(exports.react, exports.cTeacher);
