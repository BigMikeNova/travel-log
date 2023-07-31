const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/traveler-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose.connection;
