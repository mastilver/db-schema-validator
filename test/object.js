import test from 'ava';

import schemaValidator from '../lib/index';

test('validate an object', t => {
    t.true(schemaValidator({
        anObject: {
            aString: 'string',
            aNumber: 'number'
        }
    })({
        anObject: {
            aString: 'test',
            aNumber: 2
        }
    }));
});

test('don\'t validate an object', t => {
    t.throws(() => schemaValidator({
        anObject: {
            aString: 'string',
            aNumber: 'number'
        }
    })({
        anObject: {
            aString: 2,
            aNumber: 2
        }
    }), /Expected 'aString' to be a string/);
});

test('validate a nested object', t => {
    t.true(schemaValidator({
        object1: {
            object2: {
                object3: {
                    object4: {
                        object5: {
                            aString: 'string'
                        }
                    }
                }
            }
        }
    })({
        object1: {
            object2: {
                object3: {
                    object4: {
                        object5: {
                            aString: 'test'
                        }
                    }
                }
            }
        }
    }));
});
