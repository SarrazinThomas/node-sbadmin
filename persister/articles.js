var mongoose = require('mongoose');

/**
 * User 정보를 담기 위한 Mongo DB model
 * @name userModel
 */
var articlesModel = function () {

  var articlesSchema = mongoose.Schema({
    title: String,
    text: String,
    auteur: String,
    date: { type: Date, default: Date.now },
    prix: Number,
    vote: Number
  });
 

  return mongoose.model('Articles', articlesSchema);
};

module.exports = new articlesModel();