/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    private _teacher!: Teacher; // <-- note the `!` here

    set teacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    get teacher(): Teacher {
      return this._teacher;
    }
  }
}
