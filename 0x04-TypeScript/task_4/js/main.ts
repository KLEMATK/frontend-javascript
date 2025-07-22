// Export constants for subjects

export const cpp = {
  name: 'C++',
  teacher: null as Teacher | null,
  getRequirements(): string {
    return 'Here are the requirements for C++.';
  },
  getAvailableTeacher(): string {
    return this.teacher ? `Available teacher: ${this.teacher.firstName}` : 'No teacher available';
  }
};

export const java = {
  name: 'Java',
  teacher: null as Teacher | null,
  getRequirements(): string {
    return 'Here are the requirements for Java.';
  },
  getAvailableTeacher(): string {
    return this.teacher ? `Available teacher: ${this.teacher.firstName}` : 'No teacher available';
  }
};

export const react = {
  name: 'React',
  teacher: null as Teacher | null,
  getRequirements(): string {
    return 'Here are the requirements for React.';
  },
  getAvailableTeacher(): string {
    return this.teacher ? `Available teacher: ${this.teacher.firstName}` : 'No teacher available';
  }
};

// Teacher interface to type-check teacher objects

interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC: number;
}

// Export one Teacher object with experienceTeachingC = 10

export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

// Function to assign teacher and log outputs for each subject

function testSubject(
  subject: { name: string; teacher: Teacher | null; getRequirements: () => string; getAvailableTeacher: () => string },
  teacher: Teacher
): void {
  console.log(subject.name);
  subject.teacher = teacher;
  console.log(subject.getRequirements());
  console.log(subject.getAvailableTeacher());
}

// Call testSubject for each subject

testSubject(cpp, cTeacher);
testSubject(java, cTeacher);
testSubject(react, cTeacher);
