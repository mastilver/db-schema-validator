export default validate;

function validate(validators, schemaDefinition, object) {
    Object.keys(schemaDefinition)
    .forEach(fieldName => {
        let fieldType = schemaDefinition[fieldName];

        if (Array.isArray(fieldType)) {
            fieldType = fieldType[0];

            const isValid = Array.isArray(object[fieldName]) && object[fieldName].every(x => typeof fieldType === 'object' ? validate(validators, fieldType, x) : validators[fieldType](x));

            if (!isValid) {
                throw new TypeError(`Expected '${fieldName}' to be an array of ${fieldType}`);
            }
        }
        else if (typeof fieldType === 'object') {
            validate(validators, fieldType, object[fieldName]);
        }
        else {
            const isValid = validators[fieldType](object[fieldName]);

            if (!isValid) {
                throw new TypeError(`Expected '${fieldName}' to be a ${fieldType}`);
            }
        }
    });

    return true;
}
