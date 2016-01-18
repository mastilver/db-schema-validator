import test from 'ava';

import schemaValidator from '../lib/index';

const validate = schemaValidator({
    nonNullableNumber: 'number'
});

test('validate floating number', t => {
    t.ok(validate({
        nonNullableNumber: 2.1
    }));
});

test('validate int', t => {
    t.ok(validate({
        nonNullableNumber: 2
    }));
});

test('don\'t validate bool when expecting number', t => {
    t.throws(() => validate({
        nonNullableNumber: true
    }), /Expected 'nonNullableNumber' to be a number/);
});

test('don\'t validate boolean when expecting number', t => {
    t.throws(() => validate({
        nonNullableNumber: true
    }), /Expected 'nonNullableNumber' to be a number/);
});

test('don\'t validate date when expecting number', t => {
    t.throws(() => validate({
        nonNullableNumber: new Date()
    }), /Expected 'nonNullableNumber' to be a number/);
});
