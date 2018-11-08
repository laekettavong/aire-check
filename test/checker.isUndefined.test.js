/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isUndefined', () => {
    let counter = 0

    it(`(${++counter}) String argument 'HELL)' is not undefined`, (done) => {
        assert.isFalse(Checker.isArray(global.STR_VAL3))
        expect(Checker.isUndefined(global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Template literal with variable 'Test \${str}!' is not undefined`, (done) => {
        assert.isFalse(Checker.isUndefined(`Test ${global.STR_VAL2}`))
        expect(Checker.isUndefined(`Test ${global.STR_VAL2}`)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number argument, 100 is not undefined`, (done) => {
        assert.isFalse(Checker.isUndefined(global.INT_VAL3))
        expect(Checker.isUndefined(global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is not undefined`, (done) => {
        assert.isFalse(Checker.isUndefined(global.TEST_ARRAY6))
        expect(Checker.isUndefined(global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object argument, {prop1: 100} is not undefined`, (done) => {
        assert.isFalse(Checker.isUndefined(global.TEST_OBJ2))
        expect(Checker.isUndefined(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, true is not undefined`, (done) => {
        assert.isFalse(Checker.isUndefined(true))
        expect(Checker.isUndefined(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isUndefined(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument, null is not undefined`, (done) => {
        assert.isFalse(Checker.isUndefined(null))
        expect(Checker.isUndefined(null)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.isTrue(Checker.isUndefined())
        expect(Checker.isUndefined()).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined arg throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isUndefined(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Symbol is not undefined s`, (done) => {
        assert.isFalse(Checker.isUndefined(global.TEST_SYM2))
        expect(Checker.isUndefined(global.TEST_SYM2)).to.be.a('boolean')
        done()
    })
})
