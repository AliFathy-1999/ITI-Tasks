/*
  1.
  Create a method for all arrays to sum an array of numbers.
  If any element in the array is not a number, the method should
  throw an error with a message: 'Target array must contain numbers only'.
*/
Array.prototype.sum = function() {
    var sum=0;
    try{
        this.reduce((acc,currentValue)=>{
        if(!isNaN(currentValue)){
            sum+=currentValue;
        }else{
            throw new Error(`Target array must contain numbers only`);
        }
        },0)
    }catch(e){
        console.log(e.message);
    }
    return sum;
};
console.log([1, 2, 3].sum());
/*
  2. When trying to convert an object to string, the output is always '[object object]'.
  a. Change the default output for all objects to be 'This is an object'.
*/
String()
const obj = { message: 'My message' };
function String(obj)
{
        if(typeof obj === 'object')
        {
                return 'This is an object';
        }
}
console.log(String(obj));
//console.log(String({}));

// b. Make String(obj) of only the following object return the content of the message
// while the all other objects still return 'This is an object'.
const obj2 = { message: 'This is a message' };
String(obj2) // Output: 'This is a message'.
function String (obj)
{
        if(typeof obj === 'object')
        {
            for (const key in obj) {
                if(key == "message"){
                    return `${key}: ${obj[key]}`;
                }   
                else{
                    return 'This is an object';
                }    
            }
        }
       
}
console.log(String(obj2));

/*
  3.
  a. You're developing a game which has different types of animals. All animals can walk, run,
  eat and attack. They also have color and weight properties.
  The game also has birds which do all these actions in addition to flying.
  Represent this data using OOP. 
  
  Notes:
  - Write the code twice; using ES5 function constructors and using ES6 classes.
  - Leave the implementation of the 'walk', 'run', 'eat' and 'attack' methods empty
  or write a console.log statement inside each of them.
  - Maintain the count of all created animals in the code and limit the number of
  total created animals to 100. Throw an error if the code tries to create the 101st animal.
*/
//ES5 Function constructor
function Animal(newName,newColor,newWeight) {
    try {
        if(Animal.counter < 100){
            this.name = newName;
            this.color = newColor;
            this.weight=newWeight;
            Animal.count++;
        }else{
            throw new Error("You can't create more than 100 animals");
        }
    }catch(error) {
        console.log(error.message);
    }
  }
Animal.counter=0;
function Bird(newName,newColor,newWeight){
    Animal.call(this,newName,newColor,newWeight);
}
Bird.prototype.__proto__=Animal.prototype;
Bird.prototype.flying = function(){
    console.log(`${this.name} is flying`);
}
Animal.prototype.walk=function(){
    console.log(`${this.name} is walking`);
};
Animal.prototype.run=function(){
    console.log(`${this.name} is running`);
};
Animal.prototype.eat=function(){
    console.log(`${this.name} is eating`);
};
Animal.prototype.attack=function(){
    console.log(`${this.name} is attacking`);
};
var animal= new Animal(); 
animal.name="Dog";
animal.weight=20;
animal.color="Black and White";
console.log(`
    Animal name : ${animal.name}
    Animal color : ${animal.color}
    Animal weight : ${animal.weight}
`)
animal.walk();animal.run();animal.eat();animal.attack();

var bird= new Bird(); 
bird.name="birdname";bird.weight=1;bird.color="gray";
console.log(`
    Bird name : ${bird.name}
    Bird color : ${bird.color}
    Bird weight : ${bird.weight}
`)
bird.walk();bird.run();bird.eat();bird.attack();bird.flying();
/*
  b. Write a function that detects wether an animal is a bird or not.
  isBird(animal) // Output: true or false.
*/
console.log("--------------------------------");
var isBird = function(animal){
    console.log(Bird.prototype===animal.__proto__);
}
isBird(bird);
console.log("--------------------------------");
//ES6 Function constructor
class Animal2{
    name;
    color;
    weight;
    static count = 0;
    constructor(newName,newColor,newWeight){
        try {
            if(Animal.counter < 100){
                this.name = newName;
                this.color = newColor;
                this.weight=newWeight;
                Animal.count++;
            }else{
                throw new Error("You can't create more than 100 animals");
            }
        }catch(error) {
            console.log(error.message);
        }
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
    run(){
        console.log(`${this.name} is running`);
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    attack(){
        console.log(`${this.name} is attacking`);
    }
}
class Bird2 extends Animal2{
    constructor(newName,newColor,newWeight)
    {
      super(newName,newColor,newWeight);
    }
    flying(){
        console.log(`${this.name} is flying`);
    }
}
var animal= new Animal2(); 
animal.name="cat";
animal.weight=10;
animal.color="Black";
console.log(`
    Animal name : ${animal.name}
    Animal color : ${animal.color}
    Animal weight : ${animal.weight}
`)
animal.walk();animal.run();animal.eat();animal.attack();

var bird= new Bird2(); 
bird.name="birdname2";bird.weight=4;bird.color="white and black";
console.log(`
    Bird name2 : ${bird.name}
    Bird color2: ${bird.color}
    Bird weight2 : ${bird.weight}
`)
bird.walk();bird.run();bird.eat();bird.attack();bird.flying();









