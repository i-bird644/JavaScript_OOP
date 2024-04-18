console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


class Person {

    constructor(name, pets, residence, hobbies) {
        
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;

    }

    addHobby(hobby) {

        this.hobbies.push(hobby);

    }

    removeHobby(hobby) {

        this.hobbies = this.hobbies.filter((item) => item !== hobby);

    }

    greeting(person) {

        console.log("Hello..." + person);

    }

}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {


    constructor(name, pets, residence, hobbies) {

        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";

    }

    greeting(person) {

        console.log("Hello...my name is "+ person +" and I'm a "+this.occupation);

    }

}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const david = new Person("David", 3, "JTOWN", ["Reading", "Coding"]);
const mike = new Coder("Mike", 2, "STOWN", ["Swimming", "Coding"]);


david.greeting("Dana White");
david.addHobby("Hiking");
console.log(david.name + "'s hobbies are: " + david.hobbies);
david.addHobby("Cooking");
console.log(david.name + "'s hobbies are: " + david.hobbies);
david.removeHobby("Hiking");
console.log(david.name + "'s hobbies are: " + david.hobbies);


mike.greeting(mike.name);
console.log("I reside in " + mike.residence);
mike.addHobby("Sky diving");
console.log(mike.name + "'s hobbies are: " + mike.hobbies);
mike.addHobby("Singing");
console.log(mike.name + "'s hobbies are: " + mike.hobbies);
mike.removeHobby("Singing");
console.log(mike.name + "'s hobbies are: " + mike.hobbies);



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {

  constructor() {
    this.result = 0;
  }

    add(a, b) {

        if (b == undefined) {

            this.result += a;
            return this.result;

        } else {

            this.result = a + b;
            return this.result;
            
        }

    }

    subtract(a, b) {

        if (b == undefined) {

          this.result -= a;
          return this.result;
          
        } else {

          this.result = a - b;
          return this.result;
          
        }

    }

    multiply(a, b) {

        if (b == undefined) {

          this.result *= a;
          return this.result;
          
        } else {

          this.result = a * b;
          return this.result;
          
        }    
      
    }

    divide(a, b) {

        if (b == undefined) {

          this.result /= a;
          return this.result;
          
        } else {

          this.result = a / b;
          return this.result;
          
        }
    }

    displayResult() {

        console.log("Ans: " + this.result);

    }
  
}

const icalc = new Calculator();
icalc.add(5);
icalc.displayResult();
