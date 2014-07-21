var Property = require("./property");
var Unit = require("../unit.js").unit; 
var inherits = require("../inherits.js"); 

function TownHouse(address){
  // only has one unit per address
  this.address = address;
  this.maxUnits = 1; 
  this.units = []; 
};


inherits(TownHouse, Property); 

TownHouse.prototype.available = function(){
  // a tenant it should not be available
  this.available = function() {
  	if (Unit.available) {
  		return true;
  	}else {
  		return false;
  	}
  }
};

module.exports = TownHouse;
