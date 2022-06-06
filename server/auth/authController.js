const authRepository = require('./authRepository');
const { validate } = require('./authValidation');
const {
  response400,
  response403,
  response404,
  response500,
  response200,
} = require('./../httpResponses');
const userSession = require('./userSession');
const { checkPassword } = require('../utils/utilsController');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, { email, password, authorized }) => {
  validate(res, { email, password });

  try {
    let data = await authRepository.get(email, authorized);

    if (data && data.user && !data.user.error) {
      const { user } = data;
      const hashadPassword = user.firstAccess ? user.firstPassword : user.password;
      if (user.isActive) {
        if (checkPassword(password, hashadPassword)) {
          data = await generateToken(req, res, user);

          return response200(res, data);
        }
        return response400(res, 'Usuário ou senha Inválida');
      }
      return response403(res, user);
    }
    return response404(res, data);
  } catch (e) {
    return response500(res, e);
  }
};

const generateToken = async (req, res, user) => {
  const data = {
    user,
  };

  data.token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1w', // 1 week
    algorithm: process.env.JWT_ALGORITHM,
  });

  return data;
};

exports.logout = async (req, res) => {
  if (await userSession.isLogged(req)) {
    Promise.all([userSession.closeSession(req)])
      .then(function () {
        res.clearCookie('token');
        res.redirect(req.query.redirect || process.env.LOGIN_URL);
      })
      .catch(function (e) {
        res.status(500).end();
      });
  } else {
    res.clearCookie('token');
    res.redirect(req.query.redirect || process.env.LOGIN_URL);
  }
  return res;
};
