import validators from './validators';
import validate from './validate';

export default function (schemaDefinition) {
    return object => validate(validators, schemaDefinition, object);
}
