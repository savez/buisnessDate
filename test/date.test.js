const assert = require('assert')
const buisnessdate = require('../index')

describe('Simple Math Test', () => {
  it('should return 2021-02-20', () => {
    const newDate = buisnessdate.addDay('2021-02-15', 5)
    assert.strictEqual(newDate, '2021-02-22');
  });
});