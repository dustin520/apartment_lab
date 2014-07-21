var expect = require('chai').expect, 
	Property = require("../../src/property_types/property.js"),
	TownHouse = require("../../src/property_types/town_house.js"),
	Manager = require("../../src/people/manager.js"),
	Tenant = require("../../src/people/tenant.js"),
	Unit = require("../../src/unit.js").unit,
	inherits = require("../../src/inherits.js");


describe("TownHouse", function () {
	var newHouse = new TownHouse("addy");

	it('should provide address for new place', function() {
		expect(newHouse.address).to.equal("addy"); 
	});


});