// use current database
// 1- by using group calculate how many person born in the same year and NumberOfPersons is greater than 100 and sorted Desc
// the output Data Should be
[
  { _id: { Year: Long("1955") }, NumberOfPersons: 113 },
  { _id: { Year: Long("1961") }, NumberOfPersons: 111 },
  { _id: { Year: Long("1960") }, NumberOfPersons: 110 },
  { _id: { Year: Long("1993") }, NumberOfPersons: 110 },
  { _id: { Year: Long("1975") }, NumberOfPersons: 107 },
  { _id: { Year: Long("1945") }, NumberOfPersons: 106 },
  { _id: { Year: Long("1976") }, NumberOfPersons: 105 },
  { _id: { Year: Long("1967") }, NumberOfPersons: 104 },
  { _id: { Year: Long("1990") }, NumberOfPersons: 103 },
  { _id: { Year: Long("1981") }, NumberOfPersons: 102 },
  { _id: { Year: Long("1994") }, NumberOfPersons: 102 },
  { _id: { Year: Long("1958") }, NumberOfPersons: 101 },
  { _id: { Year: Long("1995") }, NumberOfPersons: 101 },
]
db.persons.aggregate([
  {
    $group: {
      _id: {
        Year :{
          $toLong:{
            $dateToString: {
              date: { $toDate: '$dob.date'} ,
              format: '%Y'
            }
          }
        }
      },
      NumberOfPersons: {
        $count: {}
      }
    }
  },{
    $match:{
      NumberOfPersons:{
        $gt: 100
      }
    }
  },{
     $sort : { NumberOfPersons : -1 }
  }
])
[
  // 2- use Project to make the following output (first try without using the internet :D )
  // notice:
  // location has new field called type
  // coordinates points is double and on error or on null make it 0
  // birthdate is converted to date not string as stored in database
  // capitalize each word in fullName (BOUNS)
  // age is calculated according to birthdate

  //-----------sample Data:
  {
    gender: "female",
    location: { type: "Points", Coordinates: [43.9085, 25.1614] },
    email: "mestan.kaplangı@example.com",
    BirthDay: ISODate("1951-12-17T20:03:33.000Z"),
    fullName: "Mestan Kaplangı",
    age: 71,
  }
];
db.persons.aggregate([
  {
    $addFields:{
      "location.type":"Points",
      Strlengthfirst: { $strLenCP: "$name.first" },
      Strlengthlast: { $strLenCP: "$name.last" },
    }
  },
  {
    $project:{
      gender:1,
      location:{
        type:1,
        coordinates: [
          {
            $convert:
              {
                  input: "location.coordinates.latitude",
                  to: "double",
                  onError: 0,  
                  onNull: 0    
              }
            },
          {
              $convert:
                {
                    input: "location.coordinates.longitude",
                    to: "double",
                    onError: 0,  
                    onNull: 0    
                }
            }
    ]
  },
    BirthDay:{
      $convert:
         {
            input: "$dob.date",
            to: "date",  
         },
        },
        name:{
          "$substrCP": ["$name.first",0,1]
        },
        fullName:{
          $concat:[{
            $toUpper: {
              $substrCP: ["$name.first",0,1],
            },
            },
            {"$substrCP": ["$name.first",1,"$Strlengthfirst"]},
            " ",
            {
              $toUpper: {
              $substrCP: ["$name.last",0,1],
            },
            },
            {"$substrCP": ["$name.last",1,"$Strlengthlast"]},           
          ],
        },
        age:{
          $toInt:{
            $dateDiff: {
               startDate: {$toDate: '$dob.date'},
               endDate: "$$NOW",
               unit: "year",
         }
        }
        }
      }
      },
])
