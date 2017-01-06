import test from 'ava';

import schemaValidator from '../lib/index';

const validate = schemaValidator({
    anyNonNullable: 'any'
});

test('validate any with a bool', t => {
    t.true(validate({
        anyNonNullable: true
    }));
});

test('validate any with a number', t => {
    t.true(validate({
        anyNonNullable: 2.0
    }));
});

test('validate any with a int', t => {
    t.true(validate({
        anyNonNullable: 2
    }));
});

test('validate any with a string', t => {
    t.true(validate({
        anyNonNullable: 'test'
    }));
});

test('validate any with a date', t => {
    t.true(validate({
        anyNonNullable: new Date()
    }));
});
