/*
============================================
; Title:  blohn-exercise-1.3.js
; Author: Professor Krasso
; Date:   21 February 2020
; Modified By: Janet Blohn
; Description: Exercise 1.3 - Class Refresher
; Create a cell phone object using functions
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 1.3"));

// Create the Cellphone constructor object.
function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  // Create method for the CellPhone object to return the price
  this.getPrice = function() {
    return this.price;
  }

  // Create a method for the CellPhone object to return the model
  this.getModel = function() {
    return this.model;
  }

  // Create a method for the CellPhone object to return the object's values
  // and output them.
  this.getDetails = function() {
    return "-- DISPLAYING CELL PHONE DETAILS --\n" +
    "Manufacturer: " + this.manufacturer + "\n" +
    "Model: " + this.getModel() + "\n" +
    "Color: " + this.color + "\n" +
    "Price: \$" + this.getPrice();
  }
}

// Define a variable to create a new CellPhone instance
var phone1 = new CellPhone("Apple", "iPhone", "Silver", 650.99);

// Write out the details of the new CellPhone object
console.log(phone1.getDetails());
