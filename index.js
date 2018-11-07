class Check {

    static equals = (subject, target) => {
        return subject === target
    }

    static equalsIgnoreType = (subject, target) => {
        return subject == target
    }

    static equalsIgnoreCase = (subject, target) => {
        Validate.stringsOnly(subject, target)
        return Check.equals(subject.toUpperCase(), target.toUpperCase())
    }

    static isGreaterThan = (subject, target) => {
        Validate.numbersOnly(subject, target)
        return subject > target
    }

    static isGreaterThanOrEqualTo = (subject, target) => {
        Validate.numbersOnly(subject, target)
        return subject >= target
    }

    static isLessThan = (subject, target) => {
        Validate.numbersOnly(subject, target)
        return subject < target
    }

    static isLessThanOrEqualTo = (subject, target) => {
        Validate.numbersOnly(subject, target)
        return subject <= target
    }

    static isString = (target) => {
        return !Check.isNullOrUndefined(target) && Check.equals(typeof (target), 'string')
    }

    static isNumber = (target) => {
        return !Check.isNullOrUndefined(target) && Check.equals(typeof (target), 'number')
    }

    static isBoolean = (target) => {
        return !Check.isNullOrUndefined(target) && Check.equals(typeof (target), 'boolean')
    }

    static isSymbol = (target) => {
        return !Check.isNullOrUndefined(target) && Check.equals(typeof (target), 'symbol')
    }

    static isObject = (target) => {
        return Check.equals(typeof (target), 'object') && !Check.isArray(target)
    }

    static isArray = (target) => {
        return !Check.isNullOrUndefined(target) && Array.isArray(target)
    }

    static isNull = (target) => {
        return Check.equals(target, null)
    }

    static isUndefined = (target) => {
        return Check.equals(typeof (target), 'undefined')
    }

    static isNullOrUndefined = (target) => {
        return Check.isNull(target) || Check.isUndefined(target)
    }

    static isEmpty = (target) => {
        Validate.stringsArrayObjectsOnly(target)
        if (Check.isString(target) && Check.equals(target, '')) return true
        if (Check.isArray(target) && Check.equals(target.length, 0)) return true
        if (Check.isObject(target) && Check.equals(Object.keys(target).length, 0)) return true
        return false
    }
}

class Validate {
    static numbersOnly = (...targets) => {
        targets.forEach(target => {
            if (Check.isNullOrUndefined(target) || !Check.isNumber(target)) throw new TypeError('[Check Error] - invalid arugment, must be a number')
        })
    }

    static booleansOnly = (...targets) => {
        targets.forEach(target => {
            if (Check.isNullOrUndefined(target) || !Check.isBoolean(target)) throw new TypeError('[Check Error] - invalid arugment, must be a boolean')
        })
    }

    static stringsOnly = (...targets) => {
        targets.forEach(target => {
            if (Check.isNullOrUndefined(target) || !Check.isString(target)) throw new TypeError('[Check Error] - invalid arugment, must be a string')
        })
    }

    static symbolsOnly = (...targets) => {
        targets.forEach(target => {
            if (Check.isNullOrUndefined(target) || !Check.isSymbol(target)) throw new TypeError('[Check Error] - invalid arugment, must be a symbol')
        })
    }

    static arraysOnly = (...targets) => {
        targets.forEach(target => {
            if (Check.isNullOrUndefined(target) || !Check.isArray(target)) throw new TypeError('[Check Error] - invalid arugment, must be an array')
        })
    }

    static objectsOnly = (...targets) => {
        targets.forEach(target => {
            if (Check.isNullOrUndefined(target) || !Check.isObject(target)) throw new TypeError('[Check Error] - invalid arugment, must be an object')
        })
    }

    static stringsArrayObjectsOnly = (...targets) => {
        targets.forEach(target => {
            if (Check.isNullOrUndefined(target) || Check.isNumber(target) || Check.isBoolean(target)) throw new TypeError('[Check Error] - invalid arugment, must be [string|array|object]')
        })
    }
}

module.exports = Check