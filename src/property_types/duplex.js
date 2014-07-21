var Property = require("./property");
var Unit = require("../unit.js").unit; 
var inherits = require("../inherits.js"); 

function Duplex(address) {
  // A duplex only has 2 units;
  this.address = address; 
  this.maxUnits = 2; 
  this.units = []; 
}

inherits(Duplex, Property); 

Duplex.prototype.available = function() { 
	this.available = function () {
		if(Unit.available) {
			return true;
		}else { 
			return false; 
		};
	};
};


module.exports = Duplex;