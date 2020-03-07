/*
============================================
; Title:  blohn-exercise-3.3.js
; Author: Professor Krasso
; Date:   6 March 2020
; Modified By: Janet Blohn
; Description: Exercise 3.2 - The Singleton Pattern
; Create a Singleton Pattern and output the results.
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 3.3"));

// Create a Singleton Database Instance.
var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
// Create only if an instance doesn't already exist; if one does return it.
  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

// Create two new database instances.
function databaseSingletonTest() {
  var databaseInstance1 = DatabaseSingleton.getInstance();
  var databaseInstance2 = DatabaseSingleton.getInstance();

  console.log("Same database instance? " + (databaseInstance1 === databaseInstance2));
}

// Call the function.
databaseSingletonTest();
