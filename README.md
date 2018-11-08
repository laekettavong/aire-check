# aire-checker

Light-weight utility module for comparing and validating ES6 primitive and reference data types: Array, Boolean, Function, Number, Object, String, Symbol, Null, Undefined.

## Installation

Using npm:
```
$ npm install --save aire-checker
```

Using yarn:
```
$ yarn add aire-checker
```

## Usage

In Node.js:
``` js
import checker from 'aire-checker'

let retVal = checker.equals(100, '100')  // true
retVal = checker.strictEquals(100, '100')  // false
retVal = checker.equalsIgnoreCase('hello', 'HELLO')  // true
retVal = checker.isArray('hello')  // false
retVal = checker.isArray(['hello'])  // true
retVal = checker.isEmpty({})  // true
retVal = checker.isNullOrUndefined(null)  // true
retVal = checker.isNullOrUndefined(undefined)  // true
retVal = checker.isSymbol({'value': true})  // false
retVal = checker.isSymbol(Symbol('hello'))  // true
retVal = checker.numbersOnly(100, 200, '300', 400)  // throws 'TypeError'
retVal = checker.numbersOnly(100, 200, 300, 400)  // no error
retVal = checker.booleansOnly(true, false, false, true, 'false', true)  // throws 'TypeError'
retVal = checker.booleansOnly(true, false, false, true, false, true)  // true
retVal = checker.stringsArrayObjectsOnly('hello', [1,2,3], 100, {'value': true})  // throws 'TypeError'
retVal = checker.stringsArrayObjectsOnly('hello', [1,2,3], {'value': true})  // true
```

## Public static functions
``` js
  checker.equals(subject, target)
  checker.strictEquals(subject, target)
  checker.equalsIgnoreCase(subject, target)
  checker.isGreaterThan(subject, target)
  checker.isGreaterThanOrEqualTo(subject, target)
  checker.isLessThan(subject, target)
  checker.isLessThanOrEqualTo(subject, target)
  checker.isArray(subject)
  checker.isBoolean(subject)
  checker.isDate(subject)
  checker.isEmpty(subject)
  checker.isFunction(subject)
  checker.isNull(subject)
  checker.isUndefined(subject)
  checker.isNullOrUndefined(subject)
  checker.isNumber(subject)
  checker.isObject(subject)
  checker.isString(subject)
  checker.isSymbol(subject)
  checker.arraysOnly(...args)
  checker.argsWithValuesOnly(...args)
  checker.booleansOnly(...args)
  checker.datesOnly(...args)
  checker.definedArgsOnly(...args)
  checker.numbersOnly(...args)
  checker.objectsOnly(...args)
  checker.stringsArrayObjectsOnly(...args)
  checker.stringsOnly(...args)
  checker.symbolsOnly(...args)
  ```