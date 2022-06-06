const auth = require('./auth');
const example = require('./example');

exports.router = (app) => {
  app.use('/api/auth', auth);
  app.use('/api/example', example);
};
