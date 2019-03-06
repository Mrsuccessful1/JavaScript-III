/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. While in global scope the value of this will be the window.
* 2. The object to the left of the dot in a function is this.
* 3. A constructor function is a function template that returns new objects.
* 4. Whenever .call or .apply is used in a function, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
function Season(argument){
    console.log(this);
    return argument;
} 
Season(Winter);

// Principle 2
const myObj = {
    greeting = 'What\'s Up',
    sayHello = function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
}
  myObj.sayHello('Ryan');

// Principle 3
function Homebody(does){
    this.does = 'stay inside',
    this.watches = 'Soap Opera\s'
    this.speak = function(){
        console.log (`I ${this.does} and watch ${this.watches} all day!`);
        console.log(this);
    };
}
const Cheryl = new Homebody('lounge around')

// Principle 4

// code example for Explicit Binding