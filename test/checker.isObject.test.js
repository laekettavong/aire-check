/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isObject', () => {
    let counter = 0

    it(`(${++counter}) String argument 'hello is not an object`, (done) => {
        assert.isFalse(Checker.isObject(global.STR_VAL2))
        expect(Checker.isObject(global.STR_VAL2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Template literal with variable 'Test \${num}!' is not an object`, (done) => {
        assert.isFalse(Checker.isObject(`Test ${global.INT_VAL3}`))
        expect(Checker.isObject(`Test ${global.INT_VAL3}`)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number argument, 100 is not an object`, (done) => {
        assert.isFalse(Checker.isObject(global.INT_VAL3))
        expect(Checker.isObject(global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is not an object`, (done) => {
        assert.isFalse(Checker.isObject(global.TEST_ARRAY6))
        expect(Checker.isObject(global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object argument, {prop1: 100} is an object`, (done) => {
        assert.isTrue(Checker.isObject(global.TEST_OBJ2))
        expect(Checker.isObject(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, true is not an object`, (done) => {
        assert.isFalse(Checker.isObject(true))
        expect(Checker.isObject(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isObject(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument, null is not an object`, (done) => {
        assert.throws(() => Checker.isObject(null), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isObject(), TypeError)
        done()
    })

    it(`(${++counter}) Symbol is not an object`, (done) => {
        assert.isFalse(Checker.isObject(global.TEST_SYM3))
        expect(Checker.isObject(global.TEST_SYM3)).to.be.a('boolean')
        done()
    })
})
