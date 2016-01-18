import test from 'ava';

import schemaValidator from '../lib/index';

const validate = schemaValidator({
    nonNullableInt: 'int'
});

test('validate int', t => {
    t.ok(validate({
        nonNullableInt: 2
    }));
});

test('don\'t validate number when expecting int', t => {
    t.throws(() => validate({
        nonNullableInt: 2.1
    }), /Expected 'nonNullableInt' to be a int/);
});

test('don\'t validate bool when expecting int', t => {
    t.throws(() => validate({
        nonNullableInt: true
    }), /Expected 'nonNullableInt' to be a int/);
});

test('don\'t validate string when expecting int', t => {
    t.throws(() => validate({
        nonNullableInt: 'test'
    }), /Expected 'nonNullableInt' to be a int/);
});

test('don\'t validate date when expecting int', t => {
    t.throws(() => validate({
        nonNullableInt: new Date()
    }), /Expected 'nonNullableInt' to be a int/);
});
