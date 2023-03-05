// Import the attached data into a new database and collection
//                          Done
// find all documents with age greater than 20 with index (create index on age) on age and 
db.persons.createIndex({"dob.age":1})
db.persons.find({"dob.age":{$gt:20}}).explain("executionStats")
const resWithIndex = {
    explainVersion: '1',
    queryPlanner: {
      namespace: 'mongoDBLab3.persons',
      indexFilterSet: false,
      parsedQuery: { 'dob.age': { '$gt': 20 } },
      queryHash: '08155E45',
      planCacheKey: '3F4F0F60',
      maxIndexedOrSolutionsReached: false,
      maxIndexedAndSolutionsReached: false,
      maxScansToExplodeReached: false,
      winningPlan: {
        stage: 'FETCH',
        inputStage: {
          stage: 'IXSCAN',
          keyPattern: { 'dob.age': 1 },
          indexName: 'dob.age_1',
          isMultiKey: false,
          multiKeyPaths: { 'dob.age': [] },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: 'forward',
          indexBounds: { 'dob.age': [ '(20, inf.0]' ] }
        }
      },
      rejectedPlans: []
    },
    executionStats: {
      executionSuccess: true,
      nReturned: 5000,
      executionTimeMillis: 6, // =================================
      totalKeysExamined: 5000,
      totalDocsExamined: 5000,
      executionStages: {
        stage: 'FETCH',
        nReturned: 5000,
        executionTimeMillisEstimate: 0,
        works: 5001,
        advanced: 5000,
        needTime: 0,
        needYield: 0,
        saveState: 5,
        restoreState: 5,
        isEOF: 1,
        docsExamined: 5000,
        alreadyHasObj: 0,
        inputStage: {
          stage: 'IXSCAN',
          nReturned: 5000,
          executionTimeMillisEstimate: 0,
          works: 5001,
          advanced: 5000,
          needTime: 0,
          needYield: 0,
          saveState: 5,
          restoreState: 5,
          isEOF: 1,
          keyPattern: { 'dob.age': 1 },
          indexName: 'dob.age_1',
          isMultiKey: false,
          multiKeyPaths: { 'dob.age': [] },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: 'forward',
          indexBounds: { 'dob.age': [ '(20, inf.0]' ] },
          keysExamined: 5000,
          seeks: 1,
          dupsTested: 0,
          dupsDropped: 0
        }
      }
    },
    command: {
      find: 'persons',
      filter: { 'dob.age': { '$gt': 20 } },
      '$db': 'mongoDBLab3'
    },
    serverInfo: {
      host: 'alifathy99-G5-5500',
      port: 27017,
      version: '6.0.4',
      gitVersion: '44ff59461c1353638a71e710f385a566bcd2f547'
    },
    serverParameters: {
      internalQueryFacetBufferSizeBytes: 104857600,
      internalQueryFacetMaxOutputDocSizeBytes: 104857600,
      internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
      internalDocumentSourceGroupMaxMemoryBytes: 104857600,
      internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
      internalQueryProhibitBlockingMergeOnMongoS: 0,
      internalQueryMaxAddToSetBytes: 104857600,
      internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
    },
    ok: 1
  }
  
  
// another one with drop index and run explain with executionStats on both and see executionTimeMillis and discuss what you see
db.persons.find({"dob.age":{$gt:20}}).explain("executionStats")
const resWithoutIndex = {
    explainVersion: '1',
    queryPlanner: {
      namespace: 'mongoDBLab3.persons',
      indexFilterSet: false,
      parsedQuery: { 'dob.age': { '$gt': 20 } },
      queryHash: '08155E45',
      planCacheKey: '08155E45',
      maxIndexedOrSolutionsReached: false,
      maxIndexedAndSolutionsReached: false,
      maxScansToExplodeReached: false,
      winningPlan: {
        stage: 'COLLSCAN',
        filter: { 'dob.age': { '$gt': 20 } },
        direction: 'forward'
      },
      rejectedPlans: []
    },
    executionStats: {
      executionSuccess: true,
      nReturned: 5000,
      executionTimeMillis: 3, //=======================
      totalKeysExamined: 0,
      totalDocsExamined: 5000,
      executionStages: {
        stage: 'COLLSCAN',
        filter: { 'dob.age': { '$gt': 20 } },
        nReturned: 5000,
        executionTimeMillisEstimate: 0,
        works: 5002,
        advanced: 5000,
        needTime: 1,
        needYield: 0,
        saveState: 5,
        restoreState: 5,
        isEOF: 1,
        direction: 'forward',
        docsExamined: 5000
      }
    },
    command: {
      find: 'persons',
      filter: { 'dob.age': { '$gt': 20 } },
      '$db': 'mongoDBLab3'
    },
    serverInfo: {
      host: 'alifathy99-G5-5500',
      port: 27017,
      version: '6.0.4',
      gitVersion: '44ff59461c1353638a71e710f385a566bcd2f547'
    },
    serverParameters: {
      internalQueryFacetBufferSizeBytes: 104857600,
      internalQueryFacetMaxOutputDocSizeBytes: 104857600,
      internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
      internalDocumentSourceGroupMaxMemoryBytes: 104857600,
      internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
      internalQueryProhibitBlockingMergeOnMongoS: 0,
      internalQueryMaxAddToSetBytes: 104857600,
      internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
    },
    ok: 1
  }
  
  
// create index on age with partial filter expression on male gender
db.persons.createIndex({"dob.age":-1},
  { partialFilterExpression: { gender: { $eq: "male" } } }
)
// find all query with age greater than 60 only 
db.persons.find({"dob.age":{$gt:60}})
db.persons.find({"dob.age":{$gt:60}}).explain("executionStats")

const res1 = {
  explainVersion: '1',
  queryPlanner: {
    namespace: 'mongoDBLab3.persons',
    indexFilterSet: false,
    parsedQuery: { 'dob.age': { '$gt': 60 } },
    queryHash: '08155E45',
    planCacheKey: '0D97E6E4',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN', 
        keyPattern: { 'dob.age': 1 },
        indexName: 'dob.age_1',
        isMultiKey: false,
        multiKeyPaths: { 'dob.age': [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { 'dob.age': [ '(60, inf.0]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1222,
    executionTimeMillis: 1,
    totalKeysExamined: 1222,
    totalDocsExamined: 1222,
    executionStages: {
      stage: 'FETCH',
      nReturned: 1222,
      executionTimeMillisEstimate: 0,
      works: 1223,
      advanced: 1222,
      needTime: 0,
      needYield: 0,
      saveState: 1,
      restoreState: 1,
      isEOF: 1,
      docsExamined: 1222,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1222,
        executionTimeMillisEstimate: 0,
        works: 1223,
        advanced: 1222,
        needTime: 0,
        needYield: 0,
        saveState: 1,
        restoreState: 1,
        isEOF: 1,
        keyPattern: { 'dob.age': 1 },
        indexName: 'dob.age_1',
        isMultiKey: false,
        multiKeyPaths: { 'dob.age': [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { 'dob.age': [ '(60, inf.0]' ] },
        keysExamined: 1222,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  command: {
    find: 'persons',
    filter: { 'dob.age': { '$gt': 60 } },
    '$db': 'mongoDBLab3'
  },
  serverInfo: {
    host: 'alifathy99-G5-5500',
    port: 27017,
    version: '6.0.4',
    gitVersion: '44ff59461c1353638a71e710f385a566bcd2f547'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
  },
  ok: 1
}
// IXSCAN and executionTimeMillis : 1

// and another query with age greater than 60 and gender male and explain to see what happen in both two queries
db.persons.find(
  {
    $or:[
      {"dob.age":{$gt:60}},
      {"gender":{$eq:"male"}}
    ]
  }
)
db.persons.find({$or:[{"dob.age":{$gt:60}},{"gender":{$eq:"male"}}]}).explain("executionStats") 
const res2 = {
  explainVersion: '1',
  queryPlanner: {
    namespace: 'mongoDBLab3.persons',
    indexFilterSet: false,
    parsedQuery: {
      '$or': [ { gender: { '$eq': 'male' } }, { 'dob.age': { '$gt': 60 } } ]
    },
    queryHash: 'C017B726',
    planCacheKey: '7C22165B',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'SUBPLAN',
      inputStage: {
        stage: 'COLLSCAN',
        filter: {
          '$or': [
            { gender: { '$eq': 'male' } },
            { 'dob.age': { '$gt': 60 } }
          ]
        },
        direction: 'forward'
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 3047,
    executionTimeMillis: 3,
    totalKeysExamined: 0,
    totalDocsExamined: 5000,
    executionStages: {
      stage: 'SUBPLAN',
      nReturned: 3047,
      executionTimeMillisEstimate: 0,
      works: 5002,
      advanced: 3047,
      needTime: 1954,
      needYield: 0,
      saveState: 5,
      restoreState: 5,
      isEOF: 1,
      inputStage: {
        stage: 'COLLSCAN',
        filter: {
          '$or': [
            { gender: { '$eq': 'male' } },
            { 'dob.age': { '$gt': 60 } }
          ]
        },
        nReturned: 3047,
        executionTimeMillisEstimate: 0,
        works: 5002,
        advanced: 3047,
        needTime: 1954,
        needYield: 0,
        saveState: 5,
        restoreState: 5,
        isEOF: 1,
        direction: 'forward',
        docsExamined: 5000
      }
    }
  },
  command: {
    find: 'persons',
    filter: {
      '$or': [ { 'dob.age': { '$gt': 60 } }, { gender: { '$eq': 'male' } } ]
    },
    '$db': 'mongoDBLab3'
  },
  serverInfo: {
    host: 'alifathy99-G5-5500',
    port: 27017,
    version: '6.0.4',
    gitVersion: '44ff59461c1353638a71e710f385a566bcd2f547'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
  },
  ok: 1
}
// COLLSCAN and executionTimeMillis : 3

// discuss the differnce between partial filter expression and compound indexes

/*
  - Partial indexes only index the documents in a collection that meet a specified filter expression.
  - Lower storage requirements and reduced performance costs
*/
/*
  - Compound indexes are single index structure hold references to multiple fields.
*/
// create a new collection and start to insert any data in two fields email and name
db.createCollection("newCol");
db.newCol.insertMany([
  {
    "name":"Ali Ahmed",
    "email":"aliahmedfathi37@gmail.com"
  },{
    "name":"Bassem Mahmoud",
    "email":"bassemmahmoud99@gmail.com"
  }
])
// after insert data make an index on email and it should be unique  nd only email added to index if email exist
db.newCol.createIndex( {email:1}, { unique: true, $exists: true })
// try to use text indexes to exclude words 
db.newCol.createIndex( { email: "text" } )
db.newCol.find({$text:{$search:"bassemmahmoud99"}})
