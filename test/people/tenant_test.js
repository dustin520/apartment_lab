var expect = require('chai').expect,
	Tenant = require("../../src/people/tenant.js"),
	Property = require("../../src/property_types/property.js"),
	inherits = require("../../src/inherits.js");

describe("Tenant", function() {

	describe("#addReference", function () {
		it("should add references to array", function () {
			var dustin = new Tenant("dustin", "123");
			dustin.addReference("joey"); 
			expect(dustin.references).to.eql(["joey"]); 
		});
	});


});


