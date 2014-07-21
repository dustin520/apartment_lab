var inherits = require("../inherits.js"); 
var Unit = require("../unit.js"); 
var Tenant = require("../people/tenant.js"); 
var Manager = require("../people/manager.js");


function Property(address, totalUnits) {
  this.address = address;
  this.units = [];
  this.manager = "";
  this.hasManager = false; 
  this.totalUnits = totalUnits; 

}

Property.prototype.setManager = function(person) {
  // set this.manager to person, need to check if there is a manager first
  if (this.hasManager === false) {
    this.manager = person;
    this.hasManager = true; 
  }else {
    alert('sorry, property has manager already'); 
  };
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if (unit.available && this.hasManager === true && tenant.references.length >= 2) {
    this.tenant =   
    
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
};

Property.prototype.availableUnits = function(){
  // return num of units available
}

Property.prototype.rentedUnits = function(){
  // return rented units
}


module.exports = Property;
module.exports = inherits; 
