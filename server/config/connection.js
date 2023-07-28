const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/traveler-db',{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}
)
.catch(err => console.log(err));

module.exports = mongoose.connection;