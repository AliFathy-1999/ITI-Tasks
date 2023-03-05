//  nshehab.iti43@gmail.com

//- Running aggregation queries that use multiple stages ($match, $group, $count, $skip, $limit, $lookup etc).
// $match Done
// $group Done
// $count Done
// $skip Done
// $limit Done
// $lookup Done

db.persons.createIndex({nat:1},
    { partialFilterExpression: { nat: { $eq: "AU" } } }
)
db.persons.aggregate([
    {
        $lookup: {
            from: "cities", // Another Collection
            localField: 'nat', // persons.nat
            foreignField: 'country', // cities.country 
            as: 'city',
        }
    },
    {
      $match: {
        "id.name": {
          $eq: "CPR"
        }
      },
    },
    { 
        $limit : 250
    },
    {
        $skip:50
    },
   
    {
        $group:{
            _id: '$gender',
            docsCount: {
                $count: {}
            },
        },
    },
  ])

//- Using $project and $addFields with operator expressions such 
// as ($getField, $first, $concat, $dateToString, $arrayElemAt etc).
db.persons.aggregate([
    { 
        $project: 
        { 
            "location.city": 1
        }
    }
])
//Display the ages,name,tags,date of Denmarkian ($project)
db.persons.updateMany({nat:"DK"},{$set:{    
    "tags": [
    "ut",
    "proident",
    "deserunt",
    "magna",
    "anim",
    "quis",
    "laboris"
  ]
}})
db.persons.aggregate( [
    {
    $addFields: {
        fullName:{
            $concat: ["$name.title",". ","$name.first"," ","$name.last" ] 
       },
      }
    },
    { 
        $project: 
        { 
            fullName:1,
            nat:{
                $getField: {
                  field: "nat",
                  input: "DK"
                }
            },
            firstTag: { $first: "$tags" },
            registerDate:{ 
                $dateToString: {
                    format: "%Y-%m-%d",  
                    date: {
                        $dateFromString: {
                            format: "%Y-%m-%dT%H:%M:%SZ",
                            dateString: "$dob.date"
                        }
                      }
                }
            },
            secondTag:{
                $arrayElemAt: [ "$tags", 1 ]
            }
        }
    },
  ] )
  
  const Output = [
    {
      _id: ObjectId("6402248b63ec5ba21d876ab0"),
      fullName: 'mr. victor pedersen',
      firstTag: 'ut',
      registerDate: '1959-02-19',
      secondTag: 'proident'
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab1"),
      fullName: 'mr. carl jacobs',
      firstTag: null,
      registerDate: '1984-09-30',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab2"),
      fullName: 'mr. zachary lo',
      firstTag: null,
      registerDate: '1988-10-17',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab3"),
      fullName: 'mr. harvey chambers',
      firstTag: null,
      registerDate: '1988-05-27',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab4"),
      fullName: 'mr. gideon van drongelen',
      firstTag: null,
      registerDate: '1971-03-28',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab5"),
      fullName: 'mrs. پریا پارسا',
      firstTag: null,
      registerDate: '1962-01-10',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab6"),
      fullName: 'miss. maeva wilson',
      firstTag: null,
      registerDate: '1962-08-11',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab7"),
      fullName: 'mr. elijah lewis',
      firstTag: null,
      registerDate: '1986-03-29',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab8"),
      fullName: 'mrs. olav oehme',
      firstTag: null,
      registerDate: '1960-11-28',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ab9"),
      fullName: 'mrs. madeleine till',
      firstTag: null,
      registerDate: '1954-05-01',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876aba"),
      fullName: 'miss. shona kemperman',
      firstTag: null,
      registerDate: '1948-04-23',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876abb"),
      fullName: 'ms. louise graham',
      firstTag: null,
      registerDate: '1971-01-21',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876abc"),
      fullName: 'mr. isolino viana',
      firstTag: null,
      registerDate: '1959-03-22',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876abd"),
      fullName: 'miss. mestan kaplangı',
      firstTag: null,
      registerDate: '1951-12-17',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876abe"),
      fullName: 'mrs. katie welch',
      firstTag: null,
      registerDate: '1990-10-14',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876abf"),
      fullName: 'miss. sandra lorenzo',
      firstTag: null,
      registerDate: '1975-03-23',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ac0"),
      fullName: 'mr. بنیامین سالاری',
      firstTag: null,
      registerDate: '1984-03-10',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ac1"),
      fullName: 'madame. andreia arnaud',
      firstTag: null,
      registerDate: '1960-01-31',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ac2"),
      fullName: 'ms. anaëlle adam',
      firstTag: null,
      registerDate: '1987-10-20',
      secondTag: null
    },
    {
      _id: ObjectId("6402248b63ec5ba21d876ac3"),
      fullName: 'miss. anne ruiz',
      firstTag: null,
      registerDate: '1982-10-09',
      secondTag: null
    }
  ]
  
  
//- Using $unwind.
db.persons.aggregate( [ { $unwind: "$tags" } ] )
