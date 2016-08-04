var assert = require('assert');
var utils = require('../lib/utils/utils.js');

describe('lib/utils/utils', function () {
    describe('fromSeed', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.fromSeed(1000000000000000000, 'seed'),      '1000000000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'little'),    '100000000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'so'),        '10000000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'maes'),      '1000000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'skydancer'), '100000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'nottaway'),  '10000000000000');            
            assert.equal(utils.fromSeed(1000000000000000000, 'jack'),      '1000000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'tien'),      '100000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'luck'),      '10000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'chief'),     '1000000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'wawatie'),   '100000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'ratt'),      '10000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'rajpal'),    '1000000');
            assert.equal(utils.fromSeed(1000000000000000000, 'fish'),      '100000');
            assert.equal(utils.fromSeed(1000000000000000000, 'tilly'),     '10000');
            assert.equal(utils.fromSeed(1000000000000000000, 'kam'),       '1000');
            assert.equal(utils.fromSeed(1000000000000000000, 'penny'),     '100');
            assert.equal(utils.fromSeed(1000000000000000000, 'dime'),      '10');
            assert.equal(utils.fromSeed(1000000000000000000, 'tree'),      '1');
            
            assert.equal(utils.fromSeed(1000000000000000000, 'nickel'),    '20');
            assert.equal(utils.fromSeed(1000000000000000000, 'quarter'),   '4');
        });
    });
});
