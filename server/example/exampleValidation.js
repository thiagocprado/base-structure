const Joi = require('joi');
const { messages } = require('joi-translation-pt-br');
const { response400 } = require('../httpResponses');

const schema = Joi.object({
  id: Joi.number().allow(null),
  name: Joi.string().max(255).required().label('Nome do grupo'),
  createdAt: Joi.date().allow(null),
  updatedAt: Joi.date().allow(null),
  deletedAt: Joi.date().allow(null),
});

exports.validate = (res, group) => {
  const { error } = schema.validate(group, { messages });
  const errors = error && error.details.map((error) => error.message).join(',');

  if (error) {
    response400(res, errors);
    throw errors;
  }
};
