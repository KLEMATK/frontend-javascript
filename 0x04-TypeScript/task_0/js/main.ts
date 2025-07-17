interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Aaron',
  lastName: 'King',
  age: 25,
  location: 'Liberia',
};

const student2: Student = {
  firstName: 'Mary',
  lastName: 'Johnson',
  age: 22,
  location: 'Monrovia',
};

const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);

