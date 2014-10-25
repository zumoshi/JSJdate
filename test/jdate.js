// division-by-zero-test.js

var vows = require('vows'),
    assert = require('assert');
var JDate  = require('./../tarikh.js')

// Create a Test Suite
vows.describe('Convert date to shamsi').addBatch({
    'when given an string': {
        topic: function () { return JDate("2010/5/5") },

        'we get a Date Object': function (topic) {
            assert.equal (Object.prototype.toString.call(topic.d), "[object Date]");
        },
        'toString': function(topic){
            assert.equal (topic.toString(), "1389/2/15");
        },
        'getDate': function(topic){
            assert.equal (topic.getDate(), 15);
        },
        'getMonth': function(topic){
            assert.equal (topic.getMonth(), 2);
        },
        'getYear': function(topic){
            assert.equal (topic.getYear(), 1389);
        },
        'getMah': function(topic){
            assert.equal (topic.getMah(), "اردیبهشت");
        },
        'getRooz': function(topic){
            assert.equal (topic.getRooz(), 'چهار شنبه');
        }
    },
    'given timestamp': {
        topic: function () { return JDate(1273017600*1000) },

        'we get a Date Object': function (topic) {
            assert.equal (Object.prototype.toString.call(topic.d), "[object Date]");
        },
        'toString': function(topic){
            assert.equal (topic.toString(), "1389/2/15");
        },
        'getDate': function(topic){
            assert.equal (topic.getDate(), 15);
        },
        'getMonth': function(topic){
            assert.equal (topic.getMonth(), 2);
        },
        'getYear': function(topic){
            assert.equal (topic.getYear(), 1389);
        },
        'getMah': function(topic){
            assert.equal (topic.getMah(), "اردیبهشت");
        },
        'getRooz': function(topic){
            assert.equal (topic.getRooz(), 'چهار شنبه');
        }
    },
    'given php timestamp': {
        topic: function () { return JDate(1273017600) },
        'we should get the same result as with milisec':function(topic){
            assert.equal (topic.toString(),JDate(1273017600*1000).toString())
        }
    }
}).export(module);