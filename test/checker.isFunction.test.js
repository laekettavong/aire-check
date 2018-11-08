/* eslint-env mocha */
/* global undefinedArg1, undefinedArg2*/
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isFunction', () => {
    let counter = 0

    it(`(${++counter}) Valid function should return true`, (done) => {
        assert.isTrue(Checker.isFunction(global.TEST_FUNCT1))
        assert.isTrue(Checker.isFunction(global.TEST_FUNCT2))
        assert.isTrue(Checker.isFunction(global.TEST_FUNCT3))
        assert.isTrue(Checker.isFunction(global.TEST_FUNCT4))
        expect(Checker.isFunction(global.TEST_FUNCT1)).to.be.a('boolean')
        expect(() => Checker.isFunction(global.TEST_FUNCT4)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Non function should return false`, (done) => {
        assert.isFalse(Checker.isFunction(global.INT_VAL1))
        assert.isFalse(Checker.isFunction(global.STR_VAL3))
        assert.isFalse(Checker.isFunction(global.TEST_ARRAY1))
        assert.isFalse(Checker.isFunction(global.TEST_OBJ2))
        assert.isFalse(Checker.isFunction(global.TEST_SYM1))
        assert.isFalse(Checker.isFunction(true))
        expect(Checker.isFunction(global.STR_VAL2)).to.be.a('boolean')
        expect(() => Checker.isFunction(global.TEST_FUNCT1)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isFunction(null), TypeError)
        expect(() => Checker.isFunction(null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isFunction(undefinedArg1, global.TEST_SYM2), ReferenceError)
        expect(() => Checker.isFunction(global.TEST_SYM1, undefinedArg2)).to.throw(ReferenceError)
        expect(() => Checker.isFunction(undefinedArg1)).to.throw(ReferenceError)
        expect(() => Checker.isFunction(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.isFunction()).to.throw(TypeError)
        done()
    })
})