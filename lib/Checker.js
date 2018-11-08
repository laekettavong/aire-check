/**
 * Light-weight utility class for comparing and validating ES6 primitive and reference data types.
 * 
 * Data tyes: {*}
 *      Array, Boolean, Function, Number, Object, String, Symbol, Null, Undefined
 */
class Checker {
    /**
     * Determines whether the two given parameters are equal with type coercion
     * 
     * @since 0.1.0
     * @access public
     * @category Comparison
     * 
     * @param {*} subject item being compared
     * @param {*} target item being compared to
     * @return {boolean} The result of equals check
     * @example
     * 
     * equals(100, 100)
     * // => true
     * 
     * equals(100, '100')
     * // => true
     * 
     * equals('hello', 'hello')
     * // => true
     * 
     * equals('hello', 'Hello')
     * // => false
     * 
     * equals('hello', ['hello'])
     * // => false
     * 
     */
    static equals(subject, target) {
        Checker.argsWithValuesOnly(subject, target)
        return subject == target
    }

    /**
     * Determines whether the two given parameters are equal, data type and value are compared
     * 
     * @since 0.1.0
     * @access public
     * @category Comparison
     * 
     * @param {*} subject item being compared
     * @param {*} target item being compared to
     * @return {boolean} The result of equals check
     * @example
     * 
     * strictEquals(100, 100)
     * // => true
     * 
     * strictEquals(100, '100')
     * // => false
     * 
     * strictEquals('hello', 'hello')
     * // => true
     * 
     * strictEquals('hello', 'Hello')
     * // => false
     * 
     * strictEquals('hello', ['hello'])
     * // => false
     * 
     */
    static strictEquals(subject, target) {
        Checker.argsWithValuesOnly(subject, target)
        return subject === target
    }

    /**
     * Determines whether the two given strings are equal
     * 
     * @since 0.1.0
     * @access public
     * @category Comparison
     * 
     * @param {string} subject string being compared
     * @param {string} target string being compared to
     * @return {boolean} The result of equals check
     * @example
     * 
     * equalsIgnoreCase('hello', 'HeLLo')
     * // => true
     * 
     */
    static equalsIgnoreCase(subject, target) {
        Checker.stringsOnly(subject, target)
        return Checker.strictEquals(subject.toUpperCase(), target.toUpperCase())
    }

    /**
     * Determines whether a number is greater than another number
     * 
     * @since 0.1.0
     * @access public
     * @category Comparison
     * 
     * @param {number} subject number being compared
     * @param {number} target number being compared to
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isGreaterThan(100, 50)
     * // => true
     * 
     * isGreaterThan(100, 100)
     * // => false
     * 
     * isGreaterThan(100, 500)
     * // => false
     * 
     */
    static isGreaterThan(subject, target) {
        Checker.numbersOnly(subject, target)
        return subject > target
    }

    /**
     * Determines whether a number is greater or equal to than another number
     * 
     * @since 0.1.0
     * @access public
     * @category Comparison
     * 
     * @param {number} subject number being compared
     * @param {number} target number being compared to
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isGreaterThanOrEqualTo(100, 50)
     * // => true
     * 
     * isGreaterThanOrEqualTo(100, 100)
     * // => true
     * 
     */
    static isGreaterThanOrEqualTo(subject, target) {
        Checker.numbersOnly(subject, target)
        return subject >= target
    }

    /**
     * Determines whether a number is less than another number
     * 
     * @since 0.1.0
     * @access public
     * @category Comparison
     * 
     * @param {number} subject number being compared
     * @param {number} target number being compared to
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isLessThan(100, 50)
     * // => false
     * 
     * isLessThan(100, 100)
     * // => false
     * 
     * isLessThan(100, 500)
     * // => true
     * 
     */
    static isLessThan(subject, target) {
        Checker.numbersOnly(subject, target)
        return subject < target
    }

    /**
     * Determines whether a number is less than or equal to another number
     * 
     * @since 0.1.0
     * @access public
     * @category Comparison
     * 
     * @param {number} subject number being compared
     * @param {number} target number being compared to
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isLessThanOrEqualTo(100, 50)
     * // => false
     * 
     * isLessThanOrEqualTo(100, 100)
     * // => true
     * 
     * isLessThanOrEqualTo(100, 500)
     * // => true
     * 
     */
    static isLessThanOrEqualTo(subject, target) {
        Checker.numbersOnly(subject, target)
        return subject <= target
    }

    /**
     * Determines whether the given argument is an array
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {array} subject array being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isArray(100)
     * // => false
     * 
     * isArray('hello')
     * // => false
     * 
     * isArray(['hello'])
     * // => true
     * 
     */
    static isArray(subject) {
        Checker.argsWithValuesOnly(subject)
        return !Checker.isNullOrUndefined(subject) && Array.isArray(subject)
    }

    /**
     * Determines whether the given argument is a boolean
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {boolean} subject boolean being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isBoolean('true')
     * // => false
     * 
     * isBoolean([false])
     * // => false
     * 
     * isBoolean(false)
     * // => true
     * 
     */
    static isBoolean(subject) {
        Checker.argsWithValuesOnly(subject)
        return !Checker.isNullOrUndefined(subject) && Checker.strictEquals(typeof (subject), 'boolean')
    }



    /**
     * Determines whether the given argument is a date
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {date} subject date being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isDate(100)
     * // => false
     * 
     * isDate([false])
     * // => false
     * 
     * isDate(new Date())
     * // => true
     * 
     */
    static isDate(subject) {
        Checker.argsWithValuesOnly(subject)
        return !Checker.isNullOrUndefined(subject) && subject instanceof Date
    }

    /**
     * Determines whether the given argument is a string, an array, or an object
     * 
     * @since 0.1.0
     * @access public
     * @category Content Check
     * 
     * @param {string|array|object|null} subject string/array/object being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isEmpty('')
     * // => true
     * 
     * isEmpty('hello')
     * // => false
     * 
     * isEmpty([])
     * // => true
     * 
     * isEmpty([1,2,3])
     * // => false 
     * 
     * isEmpty({})
     * // => true
     * 
     * isEmpty({'msg': 'hello'})
     * // => false
     * 
     */
    static isEmpty(subject) {
        Checker.stringsArrayObjectsOnly(subject)
        if (Checker.isString(subject) && Checker.strictEquals(subject, '')) return true
        if (Checker.isArray(subject) && Checker.strictEquals(subject.length, 0)) return true
        if (Checker.isObject(subject) && Checker.strictEquals(Object.keys(subject).length, 0)) return true
        return false
    }

    /**
     * Determines whether the given argument is a function
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {function} subject function being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isFunction({'msg': 'hello'})
     * // => false
     * 
     * isFunction(function(){})
     * // => true
     * 
     */
    static isFunction(subject) {
        Checker.argsWithValuesOnly(subject)
        return !Checker.isNullOrUndefined(subject) && Checker.strictEquals(typeof (subject), 'function')
    }

    /**
     * Determines whether the given argument is null
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {null} subject null being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isNull(null)
     * // => true
     * 
     * isNull(undefined)
     * // => false
     * 
     */
    static isNull(subject) {
        Checker.definedArgsOnly(subject)
        return subject === null
    }

    /**
     * Determines whether the given argument is undefined
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {undefined} subject undefined being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isUndefined(undefined)
     * // => true
     * 
     * isUndefined(null)
     * // => false
     * 
     */
    static isUndefined(subject) {
        return typeof (subject) === 'undefined'
    }

    /**
     * Determines whether the given argument is null or undefined
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {undefined|null} subject undefined/null being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isNullOrUndefined(null)
     * // => true
     * 
     * isNullOrUndefined(undefined)
     * // => true
     * 
     */
    static isNullOrUndefined(subject) {
        return subject === null || typeof (subject) === 'undefined'
    }

    /**
     * Determines whether the given argument is a number
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {number} subject number being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isNumber('100')
     * // => false
     * 
     * isNumber(100)
     * // => true
     * 
     */
    static isNumber(subject) {
        Checker.argsWithValuesOnly(subject)
        return !Checker.isNullOrUndefined(subject) && Checker.strictEquals(typeof (subject), 'number')
    }

    /**
     * Determines whether the given argument is an object
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {object} subject object being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isObject('hello')
     * // => false
     * 
     * isObject(['hello'])
     * // => false
     * 
     * isObject({'msg': 'hello'})
     * // => true
     * 
     */
    static isObject(subject) {
        Checker.argsWithValuesOnly(subject)
        return !Checker.isNullOrUndefined(subject) && !Checker.isArray(subject) && Checker.strictEquals(typeof (subject), 'object')
    }

    /**
     * Determines whether the given argument is a string
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {string} subject string being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isString(100)
     * // => false
     * 
     * isString('100')
     * // => true
     *
     */
    static isString(subject) {
        Checker.argsWithValuesOnly(subject)
        return !Checker.isNullOrUndefined(subject) && Checker.strictEquals(typeof (subject), 'string')
    }

    /**
     * Determines whether the given argument is a symbol
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     * 
     * @param {symbol} subject symbol being evaluated
     * @return {boolean} The result of evaluation
     * @example
     * 
     * isSymbol(100)
     * // => false
     * 
     * isSymbol(Symbol(100))
     * // => true
     *
     */
    static isSymbol(subject) {
        Checker.argsWithValuesOnly(subject)
        return !Checker.isNullOrUndefined(subject) && Checker.strictEquals(typeof (subject), 'symbol')
    }

    /**
     * Throws TypeError when any of the given arguments is not an array
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is not an array
     * @example
     * 
     * arraysOnly(100, [1,2,3])
     * // => throws TypeError
     * 
     * arraysOnly([100], [1,2,3], ['hello', 'world'])
     * // => no error
     * 
     * arraysOnly([100], [1,2,3], 1000, ['hello', 'world'])
     * // => throws TypeError
     *
     */
    static arraysOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg) || !Checker.isArray(arg)) Checker.throwTypeError('[Check Error] - invalid argument, must be an array')
        })
    }

    /**
     * Throws TypeError when any of the given arguments is null or undefined
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is null or underfined
     * @example
     * 
     * argsWithValuesOnly(100, [1,2,3], undefined)
     * // => throws TypeError
     * 
     * argsWithValuesOnly(100, [1,2,3], 'hello')
     * // => no error
     * 
     */
    static argsWithValuesOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg)) Checker.throwTypeError(`[Check Error] - ${args.length} argument(s) required`)
        })
    }

    /**
     * Throws TypeError when any of the given arguments is not a boolean
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is not a boolean
     * @example
     * 
     * booleansOnly(true, false, true, 'false', false)
     * // => throws TypeError
     * 
     * booleansOnly(true, false, true, true)
     * // => no error
     * 
     */
    static booleansOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg) || !Checker.isBoolean(arg)) Checker.throwTypeError('[Check Error] - invalid argument, must be a boolean')
        })
    }

    /**
     * Throws TypeError when any of the given arguments is not a date
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is not a date
     * @example
     * 
     * datesOnly(new Date(), new Date(2019, 10, 12), 'hello')
     * // => throws TypeError
     * 
     * datesOnly(new Date(), new Date(2019, 10, 12), new Date(2020, 9, 12), new Date())
     * // => no error
     * 
     */
    static datesOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg) || !Checker.isDate(arg)) Checker.throwTypeError('[Check Error] - invalid argument, must be a date')
        })
    }

    /**
     * Throws TypeError when any of the given argument(s) is/are undefined or is missing
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is undefined or is missing (not passed in)
     * @example
     * 
     * definedArgsOnly()
     * // => throws TypeError
     * 
     * definedArgsOnly(true, false, undefined, 'true')
     * // => throws TypeError
     * 
     */
    static definedArgsOnly(...args) {
        let errMsg = '[Check Error] - at least one argument is required'
        if (Checker.isUndefined(args[0])) Checker.throwTypeError(errMsg)

        errMsg = `[Check Error] - ${args.length} argument(s) required`
        args.forEach(arg => {
            if (Checker.isUndefined(arg)) Checker.throwTypeError(errMsg)
        })
    }

    /**
     * Throws TypeError when any of the given arguments is not a number
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is not a number
     * @example
     * 
     * numbersOnly()
     * // => throws TypeError
     * 
     * numbersOnly(100, 200, 300, '400', 500)
     * // => throws TypeError
     * 
     * numbersOnly(100, 200, 300, 400, 500)
     * // => no error
     * 
     */
    static numbersOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg) || !Checker.isNumber(arg)) throw new TypeError('[Check Error] - invalid argument, must be a number')
        })
    }

    /**
     * Throws TypeError when any of the given arguments is not an objec
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is not object
     * @example
     * 
     * objectsOnly()
     * // => throws TypeError
     * 
     * objectsOnly({'value': 100}, {'value': 200}, 300, {'value': 400})
     * // => throws TypeError
     * 
     * objectsOnly({'value': 100}, {'value': 200}, {'value': 300}, {'value': 400})
     * // => no error
     *
     */
    static objectsOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg) || !Checker.isObject(arg)) Checker.throwTypeError('[Check Error] - invalid argument, must be an object')
        })
    }

    /**
     * Throws TypeError when any of the given arguments is not a string, array or object
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is not a string, array or object
     * @example
     * 
     * stringsArrayObjectsOnly()
     * // => throws TypeError
     * 
     * stringsArrayObjectsOnly([1,2,3], 300, {'value': 400})
     * // => throws TypeError
     * 
     * stringsArrayObjectsOnly([1,2,3], '300', {'value': 400})
     * // => no error
     *
     */
    static stringsArrayObjectsOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg) || Checker.isNumber(arg) || Checker.isBoolean(arg) || Checker.isSymbol(arg) || Checker.isFunction(arg)) Checker.throwTypeError('[Check Error] - invalid argument, must be [string|array|object]')
        })
    }

    /**
     * Throws TypeError when any of the given arguments is not a string
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is not string
     * @example
     * 
     * stringsOnly()
     * // => throws TypeError
     * 
     * stringsOnly([1,2,3], 300, {'value': 400})
     * // => throws TypeError
     * 
     * stringsOnly('100', '200', 'hello', 300', '400')
     * // => no error
     *
     */
    static stringsOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg) || !Checker.isString(arg)) Checker.throwTypeError('[Check Error] - invalid argument, must be a string')
        })
    }

    /**
     * Throws TypeError when any of the given arguments is not a symbol
     * 
     * @since 0.1.0
     * @access public
     * @category Type Check
     *  
     * @param {*} args arguments being evaluated
     * @throws {TypeError} Will throw an error when an argument is not symbol
     * @example
     * 
     * symbolsOnly()
     * // => throws TypeError
     * 
     * symbolsOnly([1,2,3], Symbol(300), {'value': 400})
     * // => throws TypeError
     * 
     * symbolsOnly(Symbol(),Symbol(100),Symbol('100'),Symbol(200))
     * // => no error
     * 
     */
    static symbolsOnly(...args) {
        Checker.definedArgsOnly(...args)
        args.forEach(arg => {
            if (Checker.isNullOrUndefined(arg) || !Checker.isSymbol(arg)) Checker.throwTypeError('[Check Error] - invalid argument, must be a symbol')
        })
    }

    /**
     * Helper function: throws TypeError
     * 
     * @since 0.1.0
     * @access private
     * @category Helper Function
     *  
     * @param {string} errMsg error message
     * @throws {TypeError}
     */
    static throwTypeError(errMsg) {
        throw new TypeError(errMsg)
    }
}

module.exports = Checker
