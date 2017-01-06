import test from 'ava';

import schemaValidator from '../lib/index';

test('validate nullable core types', t => {
    t.true(schemaValidator({
        string: 'string?',
        number: 'number?',
        int: 'int?',
        date: 'date?',
        bool: 'bool?',
        any: 'any?'
    })({
        string: null,
        number: null,
        int: null,
        date: undefined,
        bool: undefined,
        any: undefined
    }));
});

test('validate array of nullable', t => {
    t.true(schemaValidator({
        aNullableArray: ['string?']
    })({
        aNullableArray: [undefined, null, 'test']
    }));
});
