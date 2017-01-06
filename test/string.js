import test from 'ava';

import schemaValidator from '../lib/index';

const validate = schemaValidator({
    nonNullableString: 'string'
});

test('validate string', t => {
    t.true(validate({
        nonNullableString: 'test'
    }));
});

test('don\'t validate number when expecting string', t => {
    t.throws(() => validate({
        nonNullableString: 2.0
    }), /Expected 'nonNullableString' to be a string/);
});

test('don\'t validate int when expecting string', t => {
    t.throws(() => validate({
        nonNullableString: 1
    }), /Expected 'nonNullableString' to be a string/);
});

test('don\'t validate boolean when expecting string', t => {
    t.throws(() => validate({
        nonNullableString: true
    }), /Expected 'nonNullableString' to be a string/);
});

test('don\'t validate date when expecting string', t => {
    t.throws(() => validate({
        nonNullableString: new Date()
    }), /Expected 'nonNullableString' to be a string/);
});
