const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
