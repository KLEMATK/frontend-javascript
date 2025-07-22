"use strict";
/// <reference path="./Teacher.ts" />
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Object.defineProperty(Subject.prototype, "teacher", {
            get: function () {
                return this._teacher;
            },
            set: function (teacher) {
                this._teacher = teacher;
            },
            enumerable: false,
            configurable: true
        });
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return 'No available teacher';
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return 'No available teacher';
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return 'No available teacher';
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
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
