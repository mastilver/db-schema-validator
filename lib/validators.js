import isInteger from 'is-integer';

const validators = {
    string: x => typeof x === 'string',
    number: x => typeof x === 'number',
    int: x => isInteger(x),
    bool: x => x === true || x === false,
    date: x => x instanceof Date,
    any: x => x !== undefined || x !== null
};

const nullableValidator = x => x === undefined || x === null;

// add nullable types
Object.keys(validators).forEach(type => {
    validators[`${ type }?`] = x => nullableValidator(x) || validators[type](x);
});

export default validators;
