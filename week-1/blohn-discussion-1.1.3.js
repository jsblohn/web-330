/*
============================================
; Title:  blohn-discussion-1.1.3.js
; Author: Janet Blohn, Tania Rascia (see references)
; Date:   19 February 2020
; Description: Discussion 1.1 - Classes
; Examples of constructor prototypes.
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Discussion 1.1.3"));

// Create the Employee constructor object.
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;

}

// Create the Salaried constructor object - used examples by Tania Rascia.
function Salaried(id, firstName, lastName, title, pay, frequency) {
    Employee.call(this, id, firstName, lastName, title);

    this.pay = pay;
    this.frequency = frequency;
  }

// Link prototypes - used examples by Tania Rascia.
// This links the constructor Salaried's prototype to the constructor Employee's prototype
Salaried.prototype = Object.create(Employee.prototype);

// Add salaryInfo method to the Salaried constructor.
// This creates a prototype for the Salaried constructor.
Salaried.prototype.salaryInfo = function() {
    return `${this.pay}, ${this.frequency}`;
}

// Add employeeInfo method to the Employee prototype.
// This creates a prototype for the Employee constructor.
Employee.prototype.employeeInfo = function() {
    return `${this.firstName} ${this.lastName}, ${this.title}`;
}

// Add jobTitle method to the Employee prototype.
// This creates another prototype for the Employee constructor.
Employee.prototype.jobTitle = function() {
    return `${this.firstName} has the title of ${this.title}`;
}

// Create instances of Employee
var employee1 = new Employee(100, "Don", "Jones", "Software Engineer");
var employee2 = new Employee(580, "Brenda", "White", "QA Analyst");

// Create instance of Salaried
var employee3 = new Salaried(340, "Jane", "Doe", "Technical Support Specialist", "2400", "Bi-weekly");

// Show an Employee Instance can use the employeeInfo method
console.log("Employee Instances:\n" + employee1.employeeInfo());

// Show an Employee Instance can use the jobTitle method
console.log(employee2.jobTitle());

// Show a Salaried Instance can use Employee and Salary methods
console.log("\nSalaried Instance:\n" + employee3.employeeInfo() + ", " + employee3.salaryInfo());
