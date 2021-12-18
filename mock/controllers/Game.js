'use strict';

var utils = require('../utils/writer.js');
var Game = require('../service/GameService');

module.exports.gameHistoryGET = function gameHistoryGET (req, res, next) {
  Game.gameHistoryGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameHistoryidGET = function gameHistoryidGET (req, res, next) {
  Game.gameHistoryidGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
