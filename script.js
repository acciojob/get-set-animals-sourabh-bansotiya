//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
		}
	makeSound() {
			console.log(this._species + " makes sound");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
