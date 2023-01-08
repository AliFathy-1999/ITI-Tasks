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
  console.log(usersObj);
  return usersObj;
}
