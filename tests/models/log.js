'use strict';
const models = require('../../server/models');
const helpers = require('./helpers');

describe('models/Log', () => {
  const logging1 = {
    username: 'Auto Renter1',
    level: 'info',
    message: 'Database testing'
  };

  helpers.testCanSave(models, models.Log, logging1);
  helpers.testRequiredField(models, models.Log, logging1, 'username');
  helpers.testRequiredField(models, models.Log, logging1, 'level');
  helpers.testRequiredField(models, models.Log, logging1, 'message');
});
