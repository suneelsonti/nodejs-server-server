'use strict';

var utils = require('../utils/writer.js');
var BlogService = require('../service/BlogServiceService');

module.exports.apiV1ArticlesGET = function apiV1ArticlesGET (req, res, next) {
  BlogService.apiV1ArticlesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ArticlesPOST = function apiV1ArticlesPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  BlogService.apiV1ArticlesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
