var expect = require("chai").expect,
  Person = require("../src/people/person.js");

describe("Person", function(){
  
	it('should add a new person with name and contact', function () {
		var dustin = new Person("dustin", "1234");
		expect(dustin.name).to.equal("dustin");
		expect(dustin.contact).to.equal("1234"); 
	});

});