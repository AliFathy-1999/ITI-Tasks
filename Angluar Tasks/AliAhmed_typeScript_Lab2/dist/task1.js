"use strict";
// Task 1 -> code this questions 
// Q2 : declare a constant of type number and assign 5 to it 
const constant = 5;
// Q3 : decalre a function that accepts your name and age and return string of "I'm <name> and i'm <age> years old"
const helloMessage = (name, age) => {
    return `Hello, I'm ${name} and i'm ${age} years old`;
};
//console.log(helloMessage("Ali Ahmed",24))
// Q4 : make an array of your favorite marvel heroes names 
const heroesNames = ["Iron man", "Black widow", "Hulk", "Captain America"];
// Q6 : make a function that accept array of type Hero and return only names of heros 
const heroesName = (heroes) => {
    return heroes.map(hero => hero.name);
};
const truthy = true;
const Falsy = false;
// Q10 : make an array that can accept only strings 
const stringArray = [];
// Q11 : make an array that can accept only Hero type 
const HeroArray = [];
// Q12 : make an array that can accept both Hero or Numbers 
const HeroOrNumberArray = [];
// Q13 : make a strict variable called userType than can be only assigned to "admin" or "individual" or "company"
let userType;
userType = "individual";
userType = "admin";
userType = "company";
// Q14 : make function that accept a Hero and return only his friends and if he have no friends return his super power 
const getHeroProperties = (heroes) => {
    return heroes.map(hero => hero.friends ? hero.friends : hero.superpower);
};
console.log(getHeroProperties([
    {
        id: 1,
        name: "Iron man",
        superpower: "Superhuman strength and durability, flight, and an array of weapons",
        age: 80,
        friends: ["Hulk", "Captain America"]
    },
    {
        id: 2,
        name: "Black widow",
        superpower: "Body resistant to aging and disease and she heals faster than the average human.",
        age: 32,
        friends: ["Iron man", "Captain America"]
    },
    {
        id: 3,
        name: "Hulk",
        superpower: "The ability to leap great distances and land without harm to himself.",
        age: 79,
        friends: ["Flash", "Batman"]
    }
]));
// Q15 : make a tuple that contains your name , age , dateOfBirth , university
let myTuples = ["Ali Ahmed", 23, "17/06/1999", "Arab academy for science and technology"];
//console.log(myTuples);
// Q16 : Write a comment under your tuple and write what are problems we can probably face in tuples 
let fullName = ["Ali", "Ahmed"];
fullName.push("Fathi"); // Lack of flexibility: you can 'push' an new element on type '[string, string]' without error. 
console.log(fullName);
let coordinate = [1, 2];
let x = coordinate[0];
let y = coordinate[1];
// let z = coordinate[2]; // Error happens: Element at index 2 does not exist in tuple of length 2.
//console.log(`x : ${x} y : ${y} z : ${z}`);
let scores = [10, 5, 40];
let maxScore = Math.max(...scores); // Limited functionality : the spread operator is not compatible with tuples, which means that we need to use a different approach.
// Q17 : Write an Enum that contains days of the week (sat , sun , mon , ....etc)
/*enum DaysOfWeek {
    Saturday,
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
  }*/
// Q18 : Assign a string to the first and third elements and make possible changes 
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Saturday"] = "sat";
    DaysOfWeek[DaysOfWeek["Sunday"] = 1] = "Sunday";
    DaysOfWeek["Monday"] = "mon";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
})(DaysOfWeek || (DaysOfWeek = {}));
// Q21 : make a class on your own with any data and methods and makes his getters and setters for all values 
// Q22 : make one of your class properties is protected and one is private 
// Q23 : make your class implements your marvel interface 
// Q24 : make an abstract class and make your class inherit it 
class Films {
    constructor(Director, Writer, imdbRating) {
        this.Director = Director;
        this.Writer = Writer;
        this.imdbRating = imdbRating;
    }
}
class myMovies extends Films {
    constructor(movieTitle, movieReleased, Actors, movies, Director, Writer, imdbRating) {
        super(Director, Writer, imdbRating);
        this.movieTitle = movieTitle;
        this.movieReleased = movieReleased;
        this.Actors = Actors;
        this.movies = movies;
    }
    getmovieTitle() {
        return this.movieTitle;
    }
    getmovieReleased() {
        return this.movieReleased;
    }
    getActors() {
        return this.Actors;
    }
    getMovies() {
        return this.movies;
    }
    setmovieTitle(movieTitle) {
        this.movieTitle = this.movieTitle;
    }
    setmovieReleased(movieReleased) {
        this.movieReleased = movieReleased;
    }
    setActors(Actors) {
        this.Actors = Actors;
    }
}
const myMovie = new myMovies("Avatar", "18 Dec 2009", ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang"], ["avatar 1", "avatar 2"], "James Cameron", "James Cameron", 7.9);
const message = `
    title : ${myMovie.getmovieTitle()},
    Released at : ${myMovie.getmovieReleased()} ,
    Actors : ${myMovie.getActors().join(" , ")} ,
    Movie parts : ${myMovie.movies.join(" , ")},
    Director : ${myMovie.Director} ,
    Writer : ${myMovie.Writer} 
    and imdbRating : ${myMovie.imdbRating} `;
console.log(message);
