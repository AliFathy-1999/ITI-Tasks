// Import the attached data into a new database (e.g. boxOffice) and collection (e.g. movieStarts)
//          Done by using mongo Compass (import json file in it)

// Find all movies that have a rating higher than 9.2 and a runtime lower than 100 minutes
db.boxoffice.find({
    $and: [
        { "meta.rating": { $gt: 9.2 } },
        { "meta.runtime": {$lt:100 } }
     ]
    }
    )
// Find all movies that have a genre of "drama" or "action"
db.boxoffice.find({
    $or: [
        { genre: { $eq: "drama" } },
        { genre: { $eq: "action" } }
     ]
    }
    )
// Find all movies where visitors exceeded expected Visitors

 db.boxoffice.find( { $where: "this.visitors > this.expectedVisitors" } );

// Find all movies with exactly two genres
db.boxoffice.find( { genre: { $size: 2 } } );
// Find all movies which aired in 2018
db.boxoffice.find({"meta.aired":{$eq:2018}})
// Find all movies which have ratings greater than 8 but lower than 10
db.boxoffice.find({
    $and:[
        {"meta.rating":{$gt:8}},
        {"meta.rating":{$lt:10}}
    ]
    }
)
// Create a new collection ("sports") and upset two new documents into it (with these fields: "title", "requiresTeam")
db.createCollection("sports")
db.sports.insertMany([
    {
        "title":"",
        "requiresTeam":""
    },
    {
        "title":"",
        "requiresTeam":""
    }
]  
)
// Update all documents which do require a team by adding a new field with the minimum amount of players required 
db.sports.updateMany({requireTeam:true},{$set:{minPlayers:0}})
// Update all documents that require a team by increasing the number of required players by 10
db.sports.updateMany({requireTeam:true},{$inc:{minPlayers:10}})