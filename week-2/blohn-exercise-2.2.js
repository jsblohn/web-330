/*
============================================
; Title:  blohn-exercise-2.2.js
; Author: Professor Krasso
; Date:   27 February 2020
; Modified By: Janet Blohn
; Description: Exercise 2.2 - Prototypes
; Create a Person object literal and output the Person's full name and age.
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 2.2"));

// Create the Person object literal.
var person = {
  getAge: function() {
    return this.age;
  }
};

  // Create a person object
  var smith = Object.create(person, {
    "age": {
      value: 99
    },
    fullName: {
      value: "Bob Smith"
    }
  });

  // Call the getAge function.  Nothing will return.
  smith.getAge();

  // Output the person's full name and age.
  console.log("This person's full name is: " + smith.fullName);
  console.log("This person's age is: " + smith.age);
