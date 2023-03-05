// - Executing deleteOne and deleteMany operations.
db.users.deleteOne({id:10});
db.users.deleteMany({age:{$gte:80}});
// - Creating indexes (single field, compound, multi-key and text indexes).
//single field
db.users.createIndex({age:-1})
//compound
db.users.createIndex({age:1,id:1})
//multi-key
db.users.createIndex({"address.street":1,"address.city":1})
db.users.getIndexes()
// - Using cursor.explain with different queries and reading and understanding the winningPlan.
db.users.find({age:70}).explain()
const res1 = {
    explainVersion: '1',
    queryPlanner: {
      namespace: 'mongolab1DB.users',
      indexFilterSet: false,
      parsedQuery: { age: { '$eq': 70 } },
      queryHash: '84DCC91F',
      planCacheKey: 'E025160D',
      maxIndexedOrSolutionsReached: false,
      maxIndexedAndSolutionsReached: false,
      maxScansToExplodeReached: false,
      winningPlan: {
        stage: 'FETCH',
        inputStage: {
          stage: 'IXSCAN',
          keyPattern: { age: -1 },
          indexName: 'age_-1',
          isMultiKey: false,
          multiKeyPaths: { age: [] },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: 'forward',
          indexBounds: { age: [ '[70, 70]' ] }
        }
      },
      rejectedPlans: [
        {
          stage: 'FETCH',
          inputStage: {
            stage: 'IXSCAN',
            keyPattern: { age: 1, id: 1 },
            indexName: 'age_1_id_1',
            isMultiKey: false,
            multiKeyPaths: { age: [], id: [] },
            isUnique: false,
            isSparse: false,
            isPartial: false,
            indexVersion: 2,
            direction: 'forward',
            indexBounds: { age: [ '[70, 70]' ], id: [ '[MinKey, MaxKey]' ] }
          }
        }
      ]
    },
    command: { find: 'users', filter: { age: 70 }, '$db': 'mongolab1DB' },
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
  db.users.find({
    $or:[
    {age:70},
    {username:"Kamren"}
    ]
}).explain()
const res2 = {
    explainVersion: '1',
    queryPlanner: {
      namespace: 'mongolab1DB.users',
      indexFilterSet: false,
      parsedQuery: {
        '$or': [ { age: { '$eq': 70 } }, { username: { '$eq': 'Kamren' } } ]
      },
      queryHash: '11BB58F5',
      planCacheKey: 'C8F9FA5B',
      maxIndexedOrSolutionsReached: false,
      maxIndexedAndSolutionsReached: false,
      maxScansToExplodeReached: false,
      winningPlan: {
        stage: 'SUBPLAN',
        inputStage: {
          stage: 'COLLSCAN',
          filter: {
            '$or': [ { age: { '$eq': 70 } }, { username: { '$eq': 'Kamren' } } ]
          },
          direction: 'forward'
        }
      },
      rejectedPlans: []
    },
    command: {
      find: 'users',
      filter: { '$or': [ { age: 70 }, { username: 'Kamren' } ] },
      '$db': 'mongolab1DB'
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
  
  db.users.find({
    $and:[
    {age:70},
    {id:7}
    ]
}).explain()   
const res3 = 
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'mongolab1DB.users',
    indexFilterSet: false,
    parsedQuery: {
      '$and': [ { age: { '$eq': 70 } }, { id: { '$eq': 7 } } ]
    },
    queryHash: '26DDAE30',
    planCacheKey: 'A5A2F64F',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      filter: { id: { '$eq': 7 } },
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { age: -1 },
        indexName: 'age_-1',
        isMultiKey: false,
        multiKeyPaths: { age: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { age: [ '[70, 70]' ] }
      }
    },
    rejectedPlans: [
      {
        stage: 'FETCH',
        inputStage: {
          stage: 'IXSCAN',
          keyPattern: { age: 1, id: 1 },
          indexName: 'age_1_id_1',
          isMultiKey: false,
          multiKeyPaths: { age: [], id: [] },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: 'forward',
          indexBounds: { age: [ '[70, 70]' ], id: [ '[7, 7]' ] }
        }
      }
    ]
  },
  command: {
    find: 'users',
    filter: { '$and': [ { age: 70 }, { id: 7 } ] },
    '$db': 'mongolab1DB'
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

// - Running aggregation queries that use ($match, $count, $limit, $skip and $sort).
//$match
db.users.aggregate({
    $match:{
        "website":"ola.org"
    }
})
//$count
db.users.aggregate(
    {
        $match:{
            "age":{$gte:60}
        }
    }
    ,{
        $count: 'documentsCount'
    }
)
//$limit
db.users.aggregate([
    { $limit : 5 }
]);
//$skip
db.users.aggregate([
    { $skip : 5 }
]);
//$sort
db.users.aggregate(
    [
      { $sort : { id : -1 } }
    ]
 )