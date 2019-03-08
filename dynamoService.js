const dotenv = require('dotenv');
const AWS = require('aws-sdk');
const message = require('./storageFixture').value;
dotenv.config();

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "Talk";

const tableParams = {
  TableName : tableName,
  KeySchema: [
    { AttributeName: "userId", KeyType: "HASH"},  //Partition key
    { AttributeName: "conversationId", KeyType: "RANGE" },  //Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: "userId", AttributeType: "S" },
    { AttributeName: "conversationId", AttributeType: "S" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

cre = () => {
  dynamodb.createTable(tableParams, function(err, data) {
    if (err) {
      console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
      put();
    }
  });
};

const item1 =
  {
    TableName: tableName,
    Item: {
      "userId": "Norbi1234",
      "conversationId": "Convo1234",
      "message": JSON.stringify(message)
    }
  };
// const item2 = {
//     TableName: tableName,
//     Item: {
//       "userId": "Jozsi1234",
//       "conversationId": "Convo4321",
//       "message": JSON.stringify(message)
//     }
//   };

put = () => {
  console.log("Adding a new item...");
  docClient.put(item1, function (err, data) {
    if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2));
      get()
    }
  });
};

var getParams = {
  TableName: tableName,
  Key:{
    "userId": "Norbi1234",
    "conversationId": "Convo1234",
  }
};

get = () => {
  docClient.get(getParams, function(err, data) {
    if (err) {
      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      del();
    }
  });
};

const deleteTableParams = {
  TableName : tableName,
};

del = () => {
  dynamodb.deleteTable(deleteTableParams, function (err, data) {
    if (err) {
      console.error("Unable to drop table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Dropped table.");
    }
  });
};

cre();
