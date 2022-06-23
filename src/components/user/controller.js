const UserService = require('./service');
const { userValidation } = require('../../validation');

let messageErr = '';
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
  try {
    const allpersonalData = await UserService.findAll();
    res.status(200).json(allpersonalData);
  } catch (err) {
    next(err);
  }
}

async function findById(req, res, next) {
  try {
    const { id } = req.params;
    const personData = await UserService.findById(id);
    res.status(200).json(personData);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const { error } = userValidation(req.body);
  if (error) {
    messageErr = res.status(400).send(error.details[0].message);
  } else {
    try {
      const insertPersonalData = await UserService.createUser({ ...req.body });
      res.status(201).json(insertPersonalData);
    } catch (err) {
      next(err);
    }
  }
  return messageErr;
}

async function updateById(req, res, next) {
  const { error } = userValidation(req.body);
  if (error) {
    messageErr = res.status(400).send(error.details[0].message);
  } else {
    try {
      const { id } = req.params;
      const updatedpersonalData = await UserService.fingUpdateOne({ id }, req.body);
      res.status(200).json(updatedpersonalData);
    } catch (err) {
      next(err);
    }
  }
  return messageErr;
}

async function deleteById(req, res, next) {
  try {
    const { id } = req.params;
    const deletedpersonalData = await UserService.fingAndDeleteById(id);
    res.status(200).json(deletedpersonalData);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  deleteById,
};
