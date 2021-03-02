'use strict';

const store = require('../index');
const assertValidApp = require('./common').assertValidApp;
const assert = require('chai').assert;

const FACEBOOK_ID = '284882218';

describe('Developer method', () => {
  it('should fetch a valid application list', () => {
    return store.developer({ devId: FACEBOOK_ID })
      .then((apps) => {
        apps.forEach(assertValidApp);
        apps.forEach((app) => {
          assert.equal(app.developerId, FACEBOOK_ID);
          assert.equal(app.developer, 'Facebook, Inc.');
        });
      });
  });
});
