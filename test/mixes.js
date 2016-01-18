import test from 'ava';

import schemaValidator from '../lib/index';

test('validate core types', t => {
    var result = schemaValidator({
        string: 'string',
        number: 'number',
        int: 'int',
        date: 'date',
        bool: 'bool',
        any: 'any'
    })({
        string: 'test',
        number: 4.5,
        int: 4,
        date: new Date(),
        bool: true,
        any: 'any'
    });

    t.is(true, result);
});
