'use strict';

var utils = require('../utils/writer.js');
var Player = require('../service/PlayerService');

module.exports.getPlayers = function getPlayers (req, res, next) {
  Player.getPlayers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playeridDELETE = function playeridDELETE (req, res, next) {
  Player.playeridDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playeridGET = function playeridGET (req, res, next) {
  Player.playeridGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playeridPOST = function playeridPOST (req, res, next, body) {
  Player.playeridPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playeridPUT = function playeridPUT (req, res, next, body) {
  Player.playeridPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
