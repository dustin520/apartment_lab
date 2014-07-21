var Person = require("./person");
var inherits = require("../inherits.js"); 


// Manager needs to inherit some properties from Person 
function Manager(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact; 
  // can also use call method
  // Person.call(this, name, contact); 
  this.properties = []; // array of props in managers portfolio 
}

inherits(Manager, Person); 

// assuming these are properties that a manager manages
Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.properties.push(property); // property will have a name, and be 1 of 3 types: duplex, apt, townhouse 
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  if (this.properties.indexOf('property') !== -1) {
	 this.properties.splice(this.properties.indexOf('property'),1); 
  }else {
  	console.log('you have the wrong manager for this property');
  }
};

module.exports = Manager;
