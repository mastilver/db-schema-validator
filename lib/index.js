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

export default function (schemaDefinition) {
    return object => validate(schemaDefinition, object);
}

function validate(schemaDefinition, object) {
    Object.keys(schemaDefinition)
    .forEach(fieldName => {
        let fieldType = schemaDefinition[fieldName];

        if (Array.isArray(fieldType)) {
            fieldType = fieldType[0];

            const isValid = Array.isArray(object[fieldName]) && object[fieldName].every(x => typeof fieldType === 'object' ? validate(fieldType, x) : validators[fieldType](x));

            if (!isValid) {
                throw new TypeError(`Expected '${ fieldName }' to be an array of ${ fieldType }`);
            }
        }
        else if (typeof fieldType === 'object') {
            validate(fieldType, object[fieldName]);
        }
        else {
            const isValid = validators[fieldType](object[fieldName]);

            if (!isValid) {
                throw new TypeError(`Expected '${ fieldName }' to be a ${ fieldType }`);
            }
        }
    });

    return true;
}
