const exampleController = require('./exampleController');
const { response200, response500 } = require('../httpResponses');

exports.save = async (req, res) => {
  try {
    const { example } = req.body;
    const data = await exampleController.save(res, example);

    return response200(res, data);
  } catch (error) {
    return response500(res, error);
  }
};

exports.get = async (req, res) => {
  try {
    const { id, filter } = req.params;
    const data = await exampleController.get(res, id, filter);

    return response200(res, data);
  } catch (error) {
    return response500(res, error);
  }
};

exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;
    const data = await exampleController.edit(res, id, value);

    return response200(res, data);
  } catch (error) {
    return response500(res, error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await exampleController.delete(res, id);

    return response200(res, data);
  } catch (error) {
    return response500(res, error);
  }
};
