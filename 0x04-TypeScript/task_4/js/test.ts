/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

namespace Test {
  import Teacher = Subjects.Teacher;
  import Cpp = Subjects.Cpp;
  import React = Subjects.React;
  import Java = Subjects.Java;

  const cppTeacher: Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
  const cppCourse = new Cpp();
  cppCourse.teacher = cppTeacher;
  console.log(cppCourse.getRequirements());
  console.log(cppCourse.getAvailableTeacher());

  const reactTeacher: Teacher = { firstName: 'Jane', lastName: 'Smith', experienceTeachingReact: 5 };
  const reactCourse = new React();
  reactCourse.teacher = reactTeacher;
  console.log(reactCourse.getRequirements());
  console.log(reactCourse.getAvailableTeacher());

  const javaTeacher: Teacher = { firstName: 'Jim', lastName: 'Beam', experienceTeachingJava: 0 };
  const javaCourse = new Java();
  javaCourse.teacher = javaTeacher;
  console.log(javaCourse.getRequirements());
  console.log(javaCourse.getAvailableTeacher());
}
