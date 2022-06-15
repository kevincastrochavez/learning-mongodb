const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
require('dotenv').config();

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.MONGO_URI)
    .then((client) => {
      console.log('Connected');
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
