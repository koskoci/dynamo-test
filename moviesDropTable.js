const dotenv = require('dotenv');

dotenv.config();

const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName : "Movies",
};

dynamodb.deleteTable(params, function(err, data) {
  if (err) {
    console.error("Unable to drop table. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Dropped table.");
  }
});
