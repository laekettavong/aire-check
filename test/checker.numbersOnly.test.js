/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.numbersOnly', () => {
    let counter = 0
    it(`(${++counter}) Defined argument will not throw 'TypeError'`, (done) => {
        expect(() => Checker.numbersOnly(global.INT_VAL1)).not.to.throw(TypeError)
        expect(() => Checker.numbersOnly(global.INT_VAL4, global.INT_VAL3, global.INT_VAL1, global.INT_VAL5)).not.to.throw(TypeError)
        expect(() => Checker.numbersOnly(global.INT_VAL1, global.INT_VAL2, global.INT_VAL3, global.INT_VAL4, global.INT_VAL5)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Non numbers will throw 'TypeError'`, (done) => {
        expect(() => Checker.numbersOnly(true)).to.throw(TypeError)
        expect(() => Checker.numbersOnly(global.TEST_FUNCT2)).to.throw(TypeError)
        expect(() => Checker.numbersOnly(global.INT_VAL3, global.INT_VAL2, global.STR_VAL3, global.INT_VAL5)).to.throw(TypeError)
        expect(() => Checker.numbersOnly(global.INT_VAL2, global.INT_VAL4, global.INT_VAL1, global.TEST_ARRAY6)).to.throw(TypeError)
        expect(() => Checker.numbersOnly(global.INT_VAL4, global.INT_VAL1, global.TEST_OBJ2, global.INT_VAL3, global.INT_VAL2)).to.throw(TypeError)
        expect(() => Checker.numbersOnly(global.INT_VAL5, global.INT_VAL5, global.TEST_SYM4, global.INT_VAL1)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined arguments, throws 'TypeError'`, (done) => {
        assert.throws(() => Checker.numbersOnly(global.INT_VAL3, global.INT_VAL4, global.INT_VAL1, undefined, global.INT_VAL5), TypeError)
        expect(() => Checker.numbersOnly(global.INT_VAL5, undefined, global.INT_VAL3)).to.throw(TypeError)
        expect(() => Checker.numbersOnly(undefined, global.INT_VAL1, global.INT_VAL4)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined is not a boolean, throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.numbersOnly(undefinedArg1), ReferenceError)
        expect(() => Checker.numbersOnly(undefinedArg1)).to.throw(ReferenceError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.numbersOnly(), TypeError)
        done()
    })

    it(`(${++counter}) Null arguments will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.numbersOnly(null, null), TypeError)
        assert.throws(() => Checker.numbersOnly(global.INT_VAL2, null), TypeError)
        assert.throws(() => Checker.numbersOnly(null, global.STR_INT1), TypeError)
        done()
    })
})
