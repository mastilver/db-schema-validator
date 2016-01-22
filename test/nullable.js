import test from 'ava';

import schemaValidator from '../lib/index';

test('validate nullable core types', t => {
    t.ok(schemaValidator({
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
