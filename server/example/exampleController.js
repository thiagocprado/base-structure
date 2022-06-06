const exampleRepository = require('./exampleRepository');
const { response401 } = require('../httpResponses');
const { validate } = require('./exampleValidation');
const { getLoggedUser } = require('../utils/utilsService');

exports.save = async (res, example) => {
  validate(res, example);

  const user = getLoggedUser(res.req.session);

  if (user.authorized) {
    return await exampleRepository.save(example, user.id);
  } else {
    return response401(res, null);
  }
};

exports.get = async (res, id, filter) => {
  const user = getLoggedUser(res.req.session);

  if (user.authorized) {
    return await exampleRepository.get(id, filter);
  } else {
    return response401(res, null);
  }
};

exports.edit = async (res, id, example) => {
  validate(res, example);

  const user = getLoggedUser(res.req.session);

  if (user.authorized) {
    return await exampleRepository.edit(id, example, user.id);
  } else {
    return response401(res, null);
  }
};

exports.delete = async (res, id) => {
  const user = getLoggedUser(res.req.session);

  if (user.authorized) {
    return await exampleRepository.delete(id);
  } else {
    return response401(res, null);
  }
};
