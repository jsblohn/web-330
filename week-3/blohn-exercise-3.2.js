/*
============================================
; Title:  blohn-exercise-3.2.js
; Author: Professor Krasso
; Date:   6 March 2020
; Modified By: Janet Blohn
; Description: Exercise 3.2 - The Factory Pattern
; Create 2 Database classes and their properties; output the results.
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 3.2"));

// Create the Oracle Database class.
function Oracle(properties) {
  this.username = properties.username || "maintain";
  this.password = properties.password || "my5tery";
  this.server = properties.server || "localhost:5050";
  this.version = properties.version || "19c";
}

// Create the Informix Database class.
function Informix(properties) {
  this.username = properties.username || "ibm-maintain";
  this.password = properties.password || "ibm-my5tery";
  this.server = properties.server || "localhost:3030";
}

// Call the DatabaseFactory Class.
function DatabaseFactory() {}

// Create the Database based on the Database type.
DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  } else {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

// Create the Oracle Factory.
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "maintain",
  password: "mySecret"
});

// Create the Informix Factory.
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "maintainIfx",
  password: "mySecret2"
});

// Output the Oracle Database
console.log("Oracle {\n" +
"username: " + oracle.username +
"\npassword: " + oracle.password +
"\nserver: " + oracle.server +
"\nversion: " + oracle.version +
"\n}\n");

// Output the Informix Database
console.log("Informix {\n" +
"username: " + informix.username +
"\npassword: " + informix.password +
"\nserver: " + informix.server +
"\n}\n");
