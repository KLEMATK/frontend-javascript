"use strict";
var student1 = {
    firstName: 'Aaron',
    lastName: 'King',
    age: 25,
    location: 'Liberia',
};
var student2 = {
    firstName: 'Mary',
    lastName: 'Johnson',
    age: 22,
    location: 'Monrovia',
};
var studentsList = [student1, student2];
// Create a table
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
