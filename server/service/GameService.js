'use strict';


/**
 * get all game history
 *
 * returns GameResponses
 **/
exports.gameHistoryGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "playerPoint" : "playerPoint",
  "history" : [ {
    "winCount" : 0.8008281904610115,
    "gameCount" : 6.027456183070403
  }, {
    "winCount" : 0.8008281904610115,
    "gameCount" : 6.027456183070403
  } ],
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get game history on a player
 *
 * returns GameResponses
 **/
exports.gameHistoryidGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "playerPoint" : "playerPoint",
  "history" : [ {
    "winCount" : 0.8008281904610115,
    "gameCount" : 6.027456183070403
  }, {
    "winCount" : 0.8008281904610115,
    "gameCount" : 6.027456183070403
  } ],
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

