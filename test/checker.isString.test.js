/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isString', () => {
    let counter = 0

    it(`(${++counter}) String argument 'HELL' is a string`, (done) => {
        assert.isTrue(Checker.isString(global.STR_VAL3))
        expect(Checker.isString(global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Template literal with variable 'Hello world \${word}!' is a string`, (done) => {
        assert.isTrue(Checker.isString(`Hello world ${global.STR_VAL3}!`))
        expect(Checker.isString(`Hello world ${global.STR_VAL3}!`)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number argument, 1000 is not a string`, (done) => {
        assert.isFalse(Checker.isString(global.INT_VAL3))
        expect(Checker.isString(global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is not a string`, (done) => {
        assert.isFalse(Checker.isString(global.TEST_ARRAY6))
        expect(Checker.isString(global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object argument, {prop1: 100} is not a string`, (done) => {
        assert.isFalse(Checker.isString(global.TEST_OBJ2))
        expect(Checker.isString(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, true is not a string`, (done) => {
        assert.isFalse(Checker.isString(true))
        expect(Checker.isString(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isString(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument, null is not a string`, (done) => {
        assert.throws(() => Checker.isString(null), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isString(), TypeError)
        done()
    })

    it(`(${++counter}) Symbol is not a string`, (done) => {
        assert.isFalse(Checker.isString(global.TEST_SYM2))
        expect(Checker.isString(global.TEST_SYM2)).to.be.a('boolean')
        done()
    })
})
