import test from 'ava';

import schemaValidator from '../lib/index';

const validate = schemaValidator({
    anyNonNullable: 'any'
});

test('validate any with a bool', t => {
    t.ok(validate({
        anyNonNullable: true
    }));
});

test('validate any with a number', t => {
    t.ok(validate({
        anyNonNullable: 2.0
    }));
});

test('validate any with a int', t => {
    t.ok(validate({
        anyNonNullable: 2
    }));
});

test('validate any with a bool', t => {
    t.ok(validate({
        anyNonNullable: 'test'
    }));
});

test('validate any with a date', t => {
    t.ok(validate({
        anyNonNullable: new Date()
    }));
});
