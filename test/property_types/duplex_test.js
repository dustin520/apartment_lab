var expect = require('chai').expect, 
	Property = require("../../src/property_types/property.js"),
	Duplex = require("../../src/property_types/duplex.js"),
	Manager = require("../../src/people/manager.js"),
	Tenant = require("../../src/people/tenant.js"),
	Unit = require("../../src/unit.js").unit,
	inherits = require("../../src/inherits.js");


describe("Duplex", function () {
	var newPlace = new Duplex("SF");

	it("should add address", function () {
		expect(newPlace.address).to.equal("SF"); 
	});





});