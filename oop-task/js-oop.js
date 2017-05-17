
function Animal(animalName,animalAge,animalWeight){ // A constructor which is  basically our class
		this.name = animalName;
		this.age = animalAge;
		this.weight=animalWeight; 
};
Animal.prototype.makeSound = function("sound"){ //Dog can make sound , Cat can make sound they both have access to the prototype therefore Inheritance
				this.sound = sound
		}
var Lion = function(){ // another construcror which nasically inherits from Animal
	Animal.apply(this, arguments); 
	this.name = name;
	Lion.prototype = Object.create(Animal.prototype); //all methods availiable to Animal prototype is now availiable to Lion prototype
};
// Create a certain type of Animal called lizard that will have certain functionalities that the normal doesnt
