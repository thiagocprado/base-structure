const bcrypt = require('bcrypt');

exports.checkPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};
