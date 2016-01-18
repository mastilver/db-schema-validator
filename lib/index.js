const validators = {
    string: x => typeof x === 'string',
    number: x => typeof x === 'number',
    int: x => Number.isInteger(x),
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
        const fieldType = schemaDefinition[fieldName];
        const isValid = validators[fieldType](object[fieldName]);

        if (!isValid) {
            throw new TypeError(`Expected '${ fieldName }' to be a ${ fieldType }`);
        }
    });

    return true;
}
