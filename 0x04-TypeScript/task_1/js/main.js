var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Step 2: Implement the function using the interface
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Step 3: Test the function (put at the bottom)
console.log(printTeacher("John", "Doe")); // Output: J. Doe
