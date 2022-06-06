const { Groups } = require('./../models');

const exampleRepository = {
  save: async (group, userId) => {
    const { name } = group;

    return await Groups.create({ name }, { userId });
  },

  edit: async (id, group, userId) => {
    const { name } = group;

    return await Groups.update({ name }, { where: { id }, userId });
  },

  get: async (id, filter) => {
    if (id) {
      return {
        group: await Groups.findOne({ where: { id } }),
      };
    } else {
      return {
        groups: await Groups.findAll(),
      };
    }
  },

  delete: async (id) => {
    return await Groups.destroy({ where: { id } });
  },
};

module.exports = exampleRepository;
