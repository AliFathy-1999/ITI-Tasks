// Task 1 -> code this questions 
    // Q2 : declare a constant of type number and assign 5 to it 
    const constant : number = 5;
    // Q3 : decalre a function that accepts your name and age and return string of "I'm <name> and i'm <age> years old"
    const helloMessage = (name:string,age:number) : string => {
        return `Hello, I'm ${name} and i'm ${age} years old`
    }
    
    //console.log(helloMessage("Ali Ahmed",24))
    
    // Q4 : make an array of your favorite marvel heroes names 
    const heroesNames : string[] = ["Iron man","Black widow","Hulk","Captain America"];
    // Q5 : make a type Hero that contains name , superpower and age 
    type Hero = {
        name:string,
        superpower:string,
        age:number
    }
    // Q6 : make a function that accept array of type Hero and return only names of heros 
    const heroesName = (heroes:Hero[])=>{ 
        return  heroes.map(hero=> hero.name); 
    }    
    /*console.log(heroesName(
        [
            {
                name:"Iron man",
                superpower:"Superhuman strength and durability, flight, and an array of weapons",
                age:80,
            },        
            {
                name:"Black widow",
                superpower:"Body resistant to aging and disease and she heals faster than the average human.",
                age:32
            },
            {
                name:"Hulk",
                superpower:"The ability to leap great distances and land without harm to himself.",
                age:79
            }
        ]
        ));*/
    // Q7 : make id for every Heroes and make it only for read 
    type heroWithId = Hero & { readonly id : number }
    // Q8 : make an friends array for every hero and make it optional 
    type heroWithIdAndFriends = heroWithId & { friends ? : string[]}
    // Q9 : make a type alias for boolean primitive data type and make it "truthyFalsy"
    type truthyFalsy  = Boolean 
    const truthy : truthyFalsy = true;
    const Falsy : truthyFalsy = false;
    // Q10 : make an array that can accept only strings 
    const stringArray : string[] = []
    // Q11 : make an array that can accept only Hero type 
    const HeroArray : Hero[] = []
    // Q12 : make an array that can accept both Hero or Numbers 
    const HeroOrNumberArray : (number | Hero)[] = []
    // Q13 : make a strict variable called userType than can be only assigned to "admin" or "individual" or "company"
    let userType : "individual" | "admin" | "company"
    userType = "individual";userType = "admin";userType = "company"
    // Q14 : make function that accept a Hero and return only his friends and if he have no friends return his super power 
    const getHeroProperties = (heroes:heroWithIdAndFriends[]) =>{
        return  heroes.map(hero=> hero.friends? hero.friends: hero.superpower ); 
    }
    console.log(getHeroProperties(
        [
            {
                id:1,
                name:"Iron man",
                superpower:"Superhuman strength and durability, flight, and an array of weapons",
                age:80,
                friends: ["Hulk","Captain America"]
            },        
            {
                id:2,
                name:"Black widow",
                superpower:"Body resistant to aging and disease and she heals faster than the average human.",
                age:32,
                friends: ["Iron man","Captain America"]
            },
            {
                id:3,
                name:"Hulk",
                superpower:"The ability to leap great distances and land without harm to himself.",
                age:79,
                friends: ["Flash","Batman"]
            }
        ]
        ));
    // Q15 : make a tuple that contains your name , age , dateOfBirth , university
    let myTuples : [string,number,string,string] = ["Ali Ahmed",23,"17/06/1999","Arab academy for science and technology"]; 
    //console.log(myTuples);
    
    // Q16 : Write a comment under your tuple and write what are problems we can probably face in tuples 
    let fullName: [string, string] = ["Ali", "Ahmed"];
    fullName.push("Fathi"); // Lack of flexibility: you can 'push' an new element on type '[string, string]' without error. 
    console.log(fullName);
    
    let coordinate : [number,number]= [1, 2];
    let x = coordinate[0];
    let y = coordinate[1];
    // let z = coordinate[2]; // Error happens: Element at index 2 does not exist in tuple of length 2.
    //console.log(`x : ${x} y : ${y} z : ${z}`);
    
    let scores: [number, number, number] = [10, 5, 40];
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
    enum DaysOfWeek {
        Saturday = "sat",
        Sunday=1,
        Monday = "mon",
        Tuesday=2,
        Wednesday,
        Thursday,
        Friday,
    } 
    //console.log(DaysOfWeek);
    
    // Q19 : change your type hero to an interface 
    interface hero {
        name:string,
        superpower:string,
        age:number
    }
    // Q20 : make an interface and name it Marvel that contains an array of marvel movies 
    interface Marvel {
        movies: string[]
    }
    // Q20 : make an interface and name it HeroMarvel and make it contains Hero and Marvel interfaces together 
    interface HeroMarvel extends hero,Marvel{

    }
    // Q21 : make a class on your own with any data and methods and makes his getters and setters for all values 
    // Q22 : make one of your class properties is protected and one is private 
    // Q23 : make your class implements your marvel interface 
    // Q24 : make an abstract class and make your class inherit it 
    abstract class Films {
        Director:string;
        Writer:string;
        imdbRating:number;
        constructor(Director: string,Writer:string,imdbRating:number) {
            this.Director = Director;
            this.Writer = Writer;
            this.imdbRating = imdbRating;
        }
    }
    class myMovies extends Films implements Marvel{    
        private movieTitle : string;
        protected movieReleased:string;
        private Actors:string[];
        public movies:string[];
        public constructor(movieTitle : string,movieReleased:string,Actors:string[],movies:string[],Director:string,Writer:string,imdbRating:number) {
            super(Director,Writer,imdbRating);
            this.movieTitle = movieTitle;
            this.movieReleased = movieReleased;
            this.Actors = Actors;
            this.movies = movies;
            
          }
        public getmovieTitle(): string {
            return this.movieTitle;
        }
        public getmovieReleased(): string {
            return this.movieReleased;
        }
        public getActors(): string[] {
            return this.Actors;
        }
        public getMovies(): string[] {
            return this.movies;
        }
        public setmovieTitle(movieTitle:string){
            this.movieTitle = this.movieTitle
        }
        public setmovieReleased(movieReleased: string) {
            this.movieReleased = movieReleased;
        }
        public setActors(Actors: string[]) {
            this.Actors=Actors;
        }
    }
    const myMovie = 
    new myMovies("Avatar","18 Dec 2009",["Sam Worthington","Zoe Saldana", "Sigourney Weaver", "Stephen Lang"],["avatar 1","avatar 2"],"James Cameron","James Cameron",7.9);
    const message :string = `
    title : ${myMovie.getmovieTitle()},
    Released at : ${myMovie.getmovieReleased()} ,
    Actors : ${myMovie.getActors().join(" , ")} ,
    Movie parts : ${myMovie.movies.join(" , ")},
    Director : ${myMovie.Director} ,
    Writer : ${myMovie.Writer} 
    and imdbRating : ${myMovie.imdbRating} `
    console.log(message);