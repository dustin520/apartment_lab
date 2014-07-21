var Property = require("./property.js");
var Unit = require("../unit.js").unit); 
var inherit = require("../inherit.js");

function ApartmentBuilding(name, address) {
  // A building can have many many units 
  this.name = name;
  this.address = address;
  this.maxUnits = 100;
  this.units = [];  
 	
}

inherit(ApartmentBuilding, Property); 

ApartmentBuilding.prototype.available = function () { 
	this.available = function () {
		if(Unit.available) {
			return true;
		}else {
			return false; 
		};
	};
};




module.exports = ApartmentBuilding;