/* eslint-env mocha */
/* global undefinedArg */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.argsWithValuesOnly', () => {
    let counter = 0

    it(`(${++counter}) Defined argument will not throw 'TypeError'`, (done) => {
        expect(() => Checker.argsWithValuesOnly(true)).not.to.throw(TypeError)
        expect(() => Checker.argsWithValuesOnly(global.TEST_FUNCT1)).not.to.throw(TypeError)
        expect(() => Checker.argsWithValuesOnly(global.TEST_SYM2)).not.to.throw(TypeError)
        expect(() => Checker.argsWithValuesOnly(global.TEST_ARRAY1)).not.to.throw(TypeError)
        expect(() => Checker.argsWithValuesOnly(global.STR_VAL1)).not.to.throw(TypeError)
        expect(() => Checker.argsWithValuesOnly(true, false, global.STR_VAL2, global.TEST_ARRAY2)).not.to.throw(TypeError)
        expect(() => Checker.argsWithValuesOnly(false, global.STR_VAL3, global.INT_VAL5, global.TEST_SYM1)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw an Error`, (done) => {
        assert.throws(() => Checker.argsWithValuesOnly(global.TEST_ARRAY2, global.TEST_SYM3, undefined, global.INT_VAL5, global.STR_VAL2), TypeError)
        expect(() => Checker.argsWithValuesOnly(true, undefined, global.INT_VAL4, global.STR_VAL3)).to.throw(TypeError)
        assert.throws(() => Checker.argsWithValuesOnly(undefinedArg, global.TEST_ARRAY2), ReferenceError)
        expect(() => Checker.argsWithValuesOnly(global.STR_VAL2, undefinedArg)).to.throw(ReferenceError)
        expect(() => Checker.argsWithValuesOnly(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.argsWithValuesOnly(null), TypeError)
        expect(() => Checker.argsWithValuesOnly(global.STR_VAL2, null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.argsWithValuesOnly()).to.throw(TypeError)
        done()
    })
})
