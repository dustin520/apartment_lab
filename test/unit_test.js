var expect = require("chai").expect,
  Unit = require("../src/unit.js").unit,
  app = require("../src/main.js");

console.log("Write some test for Unit...");

describe("Unit", function(){
	var first = new Unit(2, "Big", 500, 600); 

	it('should provide unit number', function () {
		expect(first.number).to.equal(2); 
	});

	it('should tell name of building', function () {
		expect(first.building).to.equal("Big"); 
	});

	it('should provide sqft', function() {
		expect(first.sqft).to.equal(500);
	});

	it('should provide rent amount', function() {
		expect(first.rent).to.equal(600);
	});

	it('should mention if tenants currently live there', function () {
		first.tenant = null;
		expect(first.tenant).to.equal(null);
	});

	describe("#available", function () {
		var first = new Unit(2, "Big", 500, 600); 
		it('should return true if open unit', function () {
			first.tenant = null;
			expect(first.available).to.equal(true); 
		});
		it('should return false if not available', function() {
			first.tenant != null;
			expect(first.available).to.equal(false); 
		});
	});


});