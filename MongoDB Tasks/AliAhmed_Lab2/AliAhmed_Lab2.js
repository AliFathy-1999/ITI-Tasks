// - Using cursor methods (skip, limit, sort).
    db.users.find({}).skip(8) //Get last two elements
    db.users.find({}).limit(5) //Get 5 elements
    db.users.find({}).limit(5).sort({id:-1}) //Descending last 5 elements
// - Executing update queries with ($set, $unset, $push, $pop, $pull, etc).
    db.users.updateOne({id:1},{$set:{email:"aliahmedfathi37@gmail.com"}})
    db.users.updateOne({id:1},{$unset:{email:"aliahmedfathi37@gmail.com"}})
    db.users.updateOne({id:3},{$push:{scores:47}})
    db.users.updateOne({id:3},{ $pop:{ scores:1 }})
    db.users.updateOne({id: 3},{ $pull: { hobbies: { $in: [ "Singing"] } } })
// - Using $push with modifiers.
    db.users.updateOne({ id: 1 },{ $push: { scores: { $each: [ 50, 70, 90 ] } } })
    db.users.updateOne({ id: 1 },{ $push: { scores: { $each: [ 60 ], $position:1  } } })
// - Using $, $[] and $[<identifier>].
// - Using update with { upsert: true }.
    db.users.updateOne(
        {id: 4,scores:10},
        { $set: { "scores.$" : 100 } }
    )
    db.users.updateOne(
        {id: 5,scores:10},
        { $set: { "scores.$[]" : 50 } }
    )
    db.users.updateOne(
        { id:6},
        { $set: { "scores.$[element]": 35 } },
        { arrayFilters: [ { element: 20 } ], upsert: true }
     )
