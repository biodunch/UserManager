var mongoose = require('mongoose');
const configs = require('./configs/configs');

mongoose.connect(`${configs.DB_HOST}/${configs.DB_NAME}`, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database connection was successful");
});
