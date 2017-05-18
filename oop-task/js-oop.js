//Animal Object, AKA parent class
		let Animal = function () {
//All animals have name
		    this.name = 'unknown'; 

		    this.getName = function () {
		        return this.name;
		    }

		    return this;
		};

//  Dog object , AKA child class		
		let Dog = function (tailColor) {
		    this.name = "Squishy"; // assigning name specific to this Animal

		    this.bark = function () {
		        return 'WOOF';
		    }  
		    this.tailDecoration = function(){console.log(tailColor)}

		    return this;
		};
//All methods availiable to Animal is now availiable to Dog.prototype
		Dog.prototype = new Animal();

// Creating an instance of Dog with a tail color of green		
		let dog = new Dog("Green");

// Inheritance beecause DOG class inherits getName from ANIMAL
		console.log(dog.getName()); 

//Encapsulation and abstraction because it prints Green to the screen when did not access to the tailColor variable directly even if tailDecoration is using it.
		console.log(dog.tailDecoration());