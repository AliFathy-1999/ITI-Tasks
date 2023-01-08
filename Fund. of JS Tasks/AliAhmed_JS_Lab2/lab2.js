 
var detailedUsers = [
    {
      firstName: 'Ahmed',
      lastName: 'Ali',
      dateOfBirth: '1995-10-10',
      address: 'Alexadria, Egypt'
    },
    {
      firstName: 'Hossam',
      lastName: 'Mohamed',
      dateOfBirth: '1980-05-10',
      address: 'Nasr City, Cairo, Egypt'
    },
    {
      firstName: 'John',
      lastName: 'James',
      dateOfBirth: '1975-03-05',
      address: 'Nasr street, Nasr City, Cairo, Egypt'
    },
    {
      firstName: 'Tarek',
      lastName: 'Hassan',
      dateOfBirth: '1999-12-03',
      address: '15, street name, district, city, country'
    },
    {
      firstName: 'Hussein',
      lastName: 'Youssuf',
      dateOfBirth: '2005-12-03',
      address: 'abc, street name, district, city, country'
    },
  
  ];
  
 function calAge(date){
    var newyear = new Date();
    var userBirthdate = new Date(date);
    var year= (newyear.getFullYear()-userBirthdate.getFullYear())-1;
    return year;
 }
  
 const formattedUsers=detailedUsers.map(formateFunction);
  
 function formateFunction(currentValue){
    var usersObj={};
    var addressArr=currentValue.address.split(',');
    usersObj.fullName=currentValue.firstName + " " +currentValue.lastName;
    usersObj.age=Number.parseInt(calAge(currentValue.dateOfBirth));
    if(addressArr.length===2){
      usersObj.city=addressArr[0];
      usersObj.country=addressArr[1];
    }
    else if (addressArr.length === 3)
    {
      usersObj.district = addressArr[0];
      usersObj.city = addressArr[1]; 
      usersObj.country = addressArr[2];
  
    }else if (addressArr.length === 4)
    {
      usersObj.streetName = addressArr[0];
      usersObj.district = addressArr[1];
      usersObj.city = addressArr[2]; 
      usersObj.country = addressArr[3];
    }
    else if (addressArr.length === 5)
    {
      if (!isNaN(Number(addressArr[0])))
      {
        usersObj.buildingNumber = addressArr[0];
      }
      usersObj.streetName = addressArr[1];
      usersObj.district = addressArr[2];
      usersObj.city = addressArr[3]; 
      usersObj.country = addressArr[4];
  
    }
  return usersObj;
 }
 var count=0;
 var totalAge=0;
 function reducerFunc(accumulator, currentValue) {
    if(currentValue.age < 40){
      count++;
      totalAge+=currentValue.age;
      return (totalAge/count).toFixed(3);
    }
 }
  
 var average = formattedUsers.reduce(reducerFunc,0);
 //console.log("Average = " + average);
 /*
  2. Calculate the number of occurrences of all characters including numbers and white
     spaces in a string. The string may contain: numbers, upper and lower-case letters and
     white spaces.
     Ignore the character case, for example, 'aA' should be counted as 2 occurrences
     of the a character.
 */
 var input = "abbflmffchocC19 ieqvh";
 function countOccurrence(str)
 {
  str = str.split("").sort().join("").toLowerCase();
  //console.log(str)
  //str = str.toLowerCase();
  if( str.length == 0 )
  {
    console.log("Invalid input")
    return;
  }
  for(let i=0;i<str.length;i++)
  {
    let count = 0;
    for(let j=0;j<str.length;j++)
    {
      if( str[i] === str[j] && i > j  )
      {
        break;
      }
      if(str[i] === str[j])
      {
        count++;
      }
    }
    if(count > 0){
      if(str[i]==" "){
        if(count === 1){
          console.log(`Whitespace occurs once`);
          continue;
        }else if(count === 2){
          console.log(`Whitespace occurs twice`);
         
        }else{
          console.log(`Whitespace occurs ${count} times`);
        }
      }
      if(count === 1){
        console.log(`${str[i]} occurs once`);
      }else if(count === 2){
        console.log(`${str[i]} occurs twice`);
      }else{
        console.log(`${str[i]} occurs ${count} times`);
      }
  
    }
  }
 }
countOccurrence(input);
 /* Output should be exactly like this in the console.
    1 ocurred once
    9 ocurred once
    a ocurred once
    b ocurred twice
    f ocurred 3 times
    l ocurred once
    m ocurred once
    c ocurred 3 times
    h ocurred twice
    o ocurred once
    White space ocurred once
    i ocurred once
    e ocurred once
    q ocurred once
    v ocurred once
 */
  

 
 
 