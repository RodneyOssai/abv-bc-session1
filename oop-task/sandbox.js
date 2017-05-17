const Animal = function(animalName,animalAge,animalColor){ // A constructor which is  basically our class n javascript.
  this.name = animalName;
  this.age = animalAge;
  this.color = animalColor;
  this.sound = sound;
};

Animal.prototype.makeSound = function(){ //Dog can make sound , Cat can make sound they both have access to the prototype therefore Inheritance
				console.log(this.sound);
};

Cat.prototype = new Animal();  