/*
============================================
; Title:  blohn-exercise-1.4.js
; Author: Professor Krasso
; Date:   21 February 2020
; Modified By: Janet Blohn
; Description: Exercise 1.4 - Duck Typing A.K.A. "Interfaces"
; Create function constructors and prototypes for 3 vehicle types
; and send to the console.
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 1.4"));

// Create the Car constructor object.
function Car(model) {
  this.model = model;
}

// Create a prototype method named "start" for the Car object to return "added to racetrack!"
Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
};

// Create the Truck constructor object.
function Truck(model, year) {
  this.model = model;
  this.year = year;
}

// Create a prototype method named "start" for the Truck object to return "added to racetrack!"
Truck.prototype.start = function() {
  console.log("Truck added to the racetrack!");
}

// Create the Jeep constructor object.
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

// Create a prototype method named "start" for the Jeep object to return "added to racetrack!"
Jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack!");
}

var mustang = new Car("Mustang");
var ranger = new Truck("Ranger", "2012");
var wrangler = new Jeep("Wrangler", "2018", "Orange");

var racetrack = [];

function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
}

driveIt(mustang);
driveIt(ranger);
driveIt(wrangler);

// Display racetrack
console.log("\n-- The following vehicles have been added to the racetrack --");
for (var i = 0; i < racetrack.length; i++) {
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}
