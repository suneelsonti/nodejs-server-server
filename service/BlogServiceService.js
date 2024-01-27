'use strict';


/**
 *
 * returns Return all articles
 **/
exports.apiV1ArticlesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "result": [
        { title: "Dummy article 1", "body": "Dummy article 1"},
        { title: "Dummy article 2", "body": "Dummy article 2"},
        { title: "Dummy article 3", "body": "Dummy article 3"},
        { title: "Dummy article 4", "body": "Dummy article 4"},
        { title: "Dummy article 5", "body": "Dummy article 5"},
      ]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body CreateArticleRequest 
 * returns Article
 **/
exports.apiV1ArticlesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "title": "New article",
      "body": "New article",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

