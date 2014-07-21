var expect = require('chai').expect,
	Manager = require('../../src/people/manager.js'),
	Property = require('../../src/property_types/property.js'), 
	inherits = require('../../src/inherits.js');


describe("Manager", function () {

	describe("Manager", function () {
		it('should create a new manager named dustin', function() {
			var manager = new Manager ("Dustin", "1234"); 
			expect(manager.name).to.equal('Dustin');
			expect(manager.contact).to.equal("1234"); 
		});
	});

	describe("#addProperty", function() {
		it('should add property to property array list', function() {
			var prop = new Property("SF");
			var dust = new Manager("dustin");
			dust.addProperty(prop);
			expect(dust.properties).to.eql(['SF']);
		});
	});

	describe("#removeProperty", function() {
		it('should remove property from property list', function() {
			var dust = new Manager("dustin");
			dust.addProperty("LA Townhouse"); 
			dust.removeProperty("LA Townhouse");
			expect(dust.properties).to.eql([]); 
		});
	});


// closing brackets	
});