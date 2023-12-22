/* CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs
 */

// 1. Create a object animal with 1 properties and 1 method:
// name, kind, speak() 
// 2. The method will take one parametar and print in the console a message: Hey bro!
// 3. enter the values from prompt 

let animal = {

    animalName: "Luci" ,
    animalKind: "Snake",

    speak: function(someMessage) {

      let message = console.log(`${this.animalKind} ${this.animalName} says: ${someMessage}`);
      return message;
    }



}
animal.speak("hey bro!!!");

// Do ovde mislam deka e ok, funkcionira. Napraiv objekt so propertia i vrakja porakata so ja vnesuvam koga povikuvam.

//Bonusot
// Pravam varijabli sto kje gi zemam od prompt i kje gi stavam kao vrednosti na propertijata vo objektot.


let userAnimalKind = prompt('What is your animal kind: ');
let userAnimalName = prompt('What is your animal name: ');
let userMessage = prompt ('What is your message: ');



animal.animalKind = userAnimalKind;
animal.animalName = userAnimalName;
animal.someMessage = userMessage;



animal.speak(userMessage);

// funckionira vaka ama mislam deka nekade se dupliram odnosno ja dolzam, sve ova moze poskrateno i pocisto, nesto propustam.




