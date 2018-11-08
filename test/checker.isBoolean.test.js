/* eslint-env mocha */
/* global undefinedArg1*/
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isBoolean', () => {
    let counter = 0

    it(`(${++counter}) String argument 'Hello' is not a boolean`, (done) => {
        assert.isFalse(Checker.isBoolean(global.STR_VAL2))
        expect(Checker.isBoolean(global.STR_VAL2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String concatenated argument 'hello' + 'world' is not a boolean`, (done) => {
        assert.isFalse(Checker.isBoolean(global.STR_VAL2 + global.STR_VAL4))
        expect(Checker.isBoolean(global.STR_VAL2 + global.STR_VAL4)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number argument, 100 is not a boolean`, (done) => {
        assert.isFalse(Checker.isBoolean(global.INT_VAL3))
        expect(Checker.isBoolean(global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is not a boolean`, (done) => {
        assert.isFalse(Checker.isBoolean(global.TEST_ARRAY6))
        expect(Checker.isBoolean(global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object argument, {prop1: 100} is not a boolean`, (done) => {
        assert.isFalse(Checker.isBoolean(global.TEST_OBJ2))
        expect(Checker.isBoolean(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, true is a boolean`, (done) => {
        assert.isTrue(Checker.isBoolean(true))
        expect(Checker.isBoolean(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, false is a boolean`, (done) => {
        assert.isTrue(Checker.isBoolean(false))
        expect(Checker.isBoolean(false)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isBoolean(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument, null is not a boolean`, (done) => {
        assert.throws(() => Checker.isBoolean(null), TypeError)
        done()
    })

    it(`(${++counter}) Symbol is not a boolean`, (done) => {
        assert.isFalse(Checker.isBoolean(global.TEST_SYM2))
        expect(Checker.isBoolean(global.TEST_SYM2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isBoolean(), TypeError)
        done()
    })
})
