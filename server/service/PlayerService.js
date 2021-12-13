'use strict';


/**
 * Get All Players
 * Get All Data Players
 *
 * returns Player
 **/
exports.getPlayers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "123456",
  "phone" : "phone",
  "avatarUrl" : "avatarUrl",
  "id" : 0,
  "email" : "mikelrisyad@gamil.com",
  "username" : "mikael"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete player on spesific id
 *
 * no response value expected for this operation
 **/
exports.playeridDELETE = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get player id
 *
 * returns Player
 **/
exports.playeridGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "123456",
  "phone" : "phone",
  "avatarUrl" : "avatarUrl",
  "id" : 0,
  "email" : "mikelrisyad@gamil.com",
  "username" : "mikael"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * insert player data
 *
 * body Player user object that needs to be added to the biodata
 * no response value expected for this operation
 **/
exports.playeridPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * update player id
 * update spesific player
 *
 * body Player user object that needs to be added to the biodata
 * returns Player
 **/
exports.playeridPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "123456",
  "phone" : "phone",
  "avatarUrl" : "avatarUrl",
  "id" : 0,
  "email" : "mikelrisyad@gamil.com",
  "username" : "mikael"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

