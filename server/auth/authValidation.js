const Joi = require('joi');
const { messages } = require('joi-translation-pt-br');
const { response400 } = require('./../httpResponses');

const schema = Joi.object({
  email: Joi.string().trim().email().required().label('Email'),
  password: Joi.string().trim().min(6).required().label('Senha'),
});

exports.validate = (res, user) => {
  const { error, value } = schema.validate(user, { messages });
  const errors = error && error.details.map((error) => error.message).join(',');

  if (error) {
    response400(res, errors);
    throw errors;
  }
};
