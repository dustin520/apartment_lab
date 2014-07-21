


function Person(name, contact){
  this.name = name;
  this.contact = contact;
};






// var dustin = new Person('dustin', '818-987-7898'); 
// var joseph = new Manager('joseph', '415-234-4321'); 
// var jacky = new Tenant('jacky', '515-123-4321');

// Manager.prototype = new Person(); 
// Manager.prototype.constructor = Manager; 

// Tenant.prototype = new Person();
// Tenant.prototype.constructor = Tenant; 

// jacky.inherit(Tenant, Person); 
// Tenant.prototype.inherit(); // ?? for tenant to inherit from person 

module.exports = Person;