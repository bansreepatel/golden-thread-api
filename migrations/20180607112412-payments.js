'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('payments', {
    id: {
      type: 'int',
      primaryKey: true
    },
    nameoncard: {
      type: 'string',
      length: 50
    },
    cardnumber: {
      type: 'string',
      length: 50
    },
    expirationdate: {
      type: 'string',
      length: 50
    },
    securitycode: {
      type: 'string',
      length: 50
    }
  }, callback);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
