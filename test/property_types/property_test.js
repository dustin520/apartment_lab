var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Manager = require("../../src/people/manager.js"),
  Unit = require("../../src/unit.js").unit;

console.log("Write some test for Property...");

describe("Property", function(){
	var prop = new Property("new place"),
		person1 = new Person("joe"),
		person2 = new Person("jack"),
		tenant = new Tenant("john"),
		manager = new Manager("manny"),
		unit = new Unit("unit1", "house", 300, 500); 


	it('should create property with address', function () {
		expect(prop.address).to.equal("new place"); 
	});


	describe("#setManager", function () {
		it('should set manager to property', function () {

		});
	});

	describe("#getManager", function () {
		it('should retrieve manager for property', function () {

		});
	});

	describe("#addTenant", function () {
		it('should add tenant if he/she has 2 ref', function () {

		});
	});

	describe("#removeTenant", function () {
		it('should remove tenant from unit', function () {

		});
	});

	describe("#availableUnits", function () {
 		it('should return num of units avail', function () {

 		});
	});

	describe("#rentedUnits", function () {
		it('should return number of units rented', function () {

		});
	});


});


