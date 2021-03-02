'use strict';

const store = require('../index');
const assert = require('chai').assert;

describe('Suggest method', () => {
  it.skip('should return five suggestion for a common term', () => store.suggest({ term: 'social' })
    .then((results) => {
      assert.equal(results.length, 50, `expected ${results} to have 50 elements`);
      results.map((r) => assert.include(r.term, 'p'));
    }));
});
