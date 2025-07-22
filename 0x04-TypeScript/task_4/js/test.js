"use strict";
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var Test;
(function (Test) {
    var Cpp = Subjects.Cpp;
    var React = Subjects.React;
    var Java = Subjects.Java;
    var cppTeacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
    var cppCourse = new Cpp();
    cppCourse.teacher = cppTeacher;
    console.log(cppCourse.getRequirements());
    console.log(cppCourse.getAvailableTeacher());
    var reactTeacher = { firstName: 'Jane', lastName: 'Smith', experienceTeachingReact: 5 };
    var reactCourse = new React();
    reactCourse.teacher = reactTeacher;
    console.log(reactCourse.getRequirements());
    console.log(reactCourse.getAvailableTeacher());
    var javaTeacher = { firstName: 'Jim', lastName: 'Beam', experienceTeachingJava: 0 };
    var javaCourse = new Java();
    javaCourse.teacher = javaTeacher;
    console.log(javaCourse.getRequirements());
    console.log(javaCourse.getAvailableTeacher());
})(Test || (Test = {}));
