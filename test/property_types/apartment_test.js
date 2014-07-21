var expect = require('chai').expect, 
	Property = require("../../src/property_types/property.js"),
	ApartmentBuilding = require("../../src/property_types/apartment_building.js"),
	Manager = require("../../src/people/manager.js"),
	Tenant = require("../../src/people/tenant.js"),
	Unit = require("../../src/unit.js").unit,
	inherits = require("../../src/inherits.js");

describe("ApartmentBuilding", function() {

	// need a before each ?? 
	var unitOne = new ApartmentBuilding("Avalon", "addy"); 

		it("should set name of apartment", function() {
			expect(unitOne.name).to.equal.("Avalon"); 
		});
		it("should set address", function () {
			expect(unitOne.address).to.equal.("addy"); 
		});




});