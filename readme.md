# db-schema-validator [![Build Status](https://travis-ci.org/mastilver/db-schema-validator.svg?branch=master)](https://travis-ci.org/mastilver/db-schema-validator)

> Object model validation


## Install

```
$ npm install --save db-schema-validator
```


## Usage

```js
import dbSchemaValidator from 'db-schema-validator';

const validate = dbSchemaValidator({
    aString: 'string',
    aNumber: 'number',
    aNullableDate: 'date?',
    anArray: ['any']
});

validate({
    aString: 'test',
    aNumber: 2.15,
    aNullableDate: null,
    anArray: ['string', 2, true]
});
//=> true

validate({
    aString: 2,
    aNumber: 2.15,
    aNullableDate: null,
    anArray: []
});
// => throw "Expected 'aString' to be a string"
```


## API

### dbSchemaValidator(schemaDefinition)(itemToValidate)

#### schemaDefinition

Type: `object`  
*required*

the schema used to validate the object, see [schema definition](#schema-definition) for more details

#### itemToValidate

Type: `object`  
*required*

the object to validate


## Schema definition

### Types

- `string`
- `number`
- `int`: non-floating `number`
- `date`
- `bool`
- `any`: anything but `undefined` or `null`

### Nullable types

Just append `?` at the end of the above

ei: `number?` will validate `undefined`, `null`, or a `number`

### Complex types

#### Object

Nested object are supported

ei:
```
{
    l1: {
        l2: {
            aString: 'string'
        },
        aNumber: 2
    }
}
```

#### Array

Just wrap your types in `[]`

ei: `['string']` will validate an array of string

Array of objects are also supported

ei:
```
[{
    aString: 'string',
    aNumber: 'number'
}]
```

## Inspirations

The schema definition is highly inspired by [ottoman](https://github.com/couchbaselabs/node-ottoman)

## License

MIT © [Thomas Sileghem](http://mastilver.com)
