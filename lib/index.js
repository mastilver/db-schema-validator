import isInteger from 'is-integer';

const validators = {
    string: x => typeof x === 'string',
    number: x => typeof x === 'number',
    int: x => isInteger(x),
    bool: x => x === true || x === false,
    date: x => x instanceof Date,
    any: x => x !== undefined || x !== null
};

export default function (schemaDefinition) {
    return object => validate(schemaDefinition, object);
}

function validate(schemaDefinition, object) {
    Object.keys(schemaDefinition)
    .forEach(fieldName => {
        let fieldType = schemaDefinition[fieldName];

        if (Array.isArray(fieldType)) {
            fieldType = fieldType[0];

            const isAnArray = Array.isArray(object[fieldName]);

            if (!isAnArray) {
                throw new TypeError(`Expected '${ fieldName }' to be an array of ${ fieldType }`);
            }

            const isValid = object[fieldName].every(x => validators[fieldType](x));

            if (!isValid) {
                throw new TypeError(`Expected '${ fieldName }' to be an array of ${ fieldType }`);
            }
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
