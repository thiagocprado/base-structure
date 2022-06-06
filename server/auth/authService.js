const { login, logout } = require('./authController');
const { response401, response500 } = require('./../httpResponses');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { user } = req.body;
    return await login(req, res, user);
  } catch (error) {
    return response500(res, error);
  }
};

exports.logout = async (req, res) => {
  try {
    const { user } = req.body;
    return await logout(req, res, user);
  } catch (error) {
    return response500(res, error);
  }
};

exports.ensureAuthentication = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return response401(res, { message: 'No auth!' }, true);
  }
  const [type, token] = authorization.split(' ');

  if (!token || type !== 'Bearer') {
    return response401(res, { message: 'No token!' }, true);
  }
  try {
    await jwt.verify(token, process.env.JWT_SECRET, async (err, dec) => {
      if (dec) {
        res.req.session = dec.data && dec.data.user;
        next();
      } else {
        res.session && res.session.destroy();
        return response401(res, { ...err }, true);
      }
    });
  } catch (error) {
    req.session && req.session.destroy();
    return response500(res, error);
  }
};
