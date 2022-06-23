const { UserModel } = require('./model');

module.exports = {
/**
* @exports
* @method findAll
* @param {}
* @summary get list of all users
* @returns Promise<UserModel[]>
*/
  async findAll() {
    return UserModel.find({});
  },

  /**
* @exports
* @method findById
* @param {}
* @summary get list of all users
* @returns Promise<UserModel[]>
*/
  async findById(id) {
    return UserModel.findById(id);
  },
  /**
* @exports
* @method createUser
* @param {}
* @summary get list of all users
* @returns Promise<UserModel[]>
*/
  async createUser(data) {
    return UserModel.create(data);
  },
  /**
* @exports
* @method fingAndDeleteById
* @param {}
* @summary get list of all users
* @returns Promise<UserModel[]>
*/
  async fingAndDeleteById(id) {
    return UserModel.findByIdAndDelete(id);
  },
  /**
* @exports
* @method fingUpdateOne
* @param {}
* @summary get list of all users
* @returns Promise<UserModel[]>
*/
  async fingUpdateOne(id, data) {
    return UserModel.updateOne(id, data);
  },
};
