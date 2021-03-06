import test from 'ava';

import schemaValidator from '../lib/index';

test('validate an array of any', t => {
    t.true(schemaValidator({
        anyArray: ['any']
    })({
        anyArray: ['test', 2, true, new Date(), 2.1]
    }));
});

test('validate an array of string', t => {
    t.true(schemaValidator({
        anyArray: ['string']
    })({
        anyArray: ['test', 'a string']
    }));
});

test('don\'t validate a array of string containing a number', t => {
    t.throws(() => schemaValidator({
        anyArray: ['string']
    })({
        anyArray: ['test', 'a string', 2]
    }), /Expected 'anyArray' to be an array of string/);
});

test('don\'t validate a array of string when given a number', t => {
    t.throws(() => schemaValidator({
        anyArray: ['string']
    })({
        anyArray: 2
    }), /Expected 'anyArray' to be an array of string/);
});

test('validate array of object', t => {
    t.true(schemaValidator({
        anArrayOfObject: [{
            aString: 'string',
            aNumber: 'number'
        }]
    })({
        anArrayOfObject: [
            {
                aString: 'test',
                aNumber: 1
            },
            {
                aString: 'test2',
                aNumber: 21
            }
        ]
    }));
});
