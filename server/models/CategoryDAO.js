require('../utils/MongooseUtil');
const Models = require('./Models');

const CategoryDAO = {
  async selectAll() {
    const query = {};
    const categories = await Models.Category.find(query).exec();
    return categories;
  },
  async insert(category) {
    const mongoose = require('mongoose');
    category._id = new mongoose.Types.ObjectId();
    const result = await Models.Category.create(category);
    return result;
  },
  async update(category) {
    const newvalues = { name: category.name }
    const result = await Models.Category.findByIdAndUpdate(category._id, newvalues, { new: true });
    return result;
  },
  async delete(_id) {
    const result = await Models.Category.findByIdAndRemove(_id);
    return result;
  },
  async selectByID(_id) {
    const category = await Models.Category.findById(_id).exec();
    return category;
  }
};
module.exports = CategoryDAO;