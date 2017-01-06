import test from 'ava';

import schemaValidator from '../lib/index';

const validate = schemaValidator({
    nonNullableBool: 'bool'
});

test('validate bool', t => {
    t.true(validate({
        nonNullableBool: true
    }));
});

test('don\'t validate number when expecting bool', t => {
    t.throws(() => validate({
        nonNullableBool: 2.0
    }), /Expected 'nonNullableBool' to be a bool/);
});

test('don\'t validate int when expecting bool', t => {
    t.throws(() => validate({
        nonNullableBool: 1
    }), /Expected 'nonNullableBool' to be a bool/);
});

test('don\'t validate string when expecting bool', t => {
    t.throws(() => validate({
        nonNullableBool: 'test'
    }), /Expected 'nonNullableBool' to be a bool/);
});

test('don\'t validate date when expecting bool', t => {
    t.throws(() => validate({
        nonNullableBool: new Date()
    }), /Expected 'nonNullableBool' to be a bool/);
});
