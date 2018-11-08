/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isNumber', () => {
    let counter = 0

    it(`(${++counter}) String argument 'HELLO' is not a number`, (done) => {
        assert.isFalse(Checker.isNumber(global.STR_VAL3))
        expect(Checker.isNumber(global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Template literal with variable 'Test \${num}!' is not a number`, (done) => {
        assert.isFalse(Checker.isNumber(`Test ${global.INT_VAL3}`))
        expect(Checker.isNumber(`Test ${global.INT_VAL3}`)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number argument, 100 is a number`, (done) => {
        assert.isTrue(Checker.isNumber(global.INT_VAL3))
        expect(Checker.isNumber(global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is not a number`, (done) => {
        assert.isFalse(Checker.isNumber(global.TEST_ARRAY6))
        expect(Checker.isNumber(global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) A function is not a number`, (done) => {
        assert.isFalse(Checker.isNumber(global.TEST_FUNCT4))
        expect(Checker.isNumber(global.TEST_FUNCT4)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object argument, {prop1: 100} is not a number`, (done) => {
        assert.isFalse(Checker.isNumber(global.TEST_OBJ2))
        expect(Checker.isNumber(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, true is not a number`, (done) => {
        assert.isFalse(Checker.isNumber(true))
        expect(Checker.isNumber(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isNumber(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument, null is not a number`, (done) => {
        assert.throws(() => Checker.isNumber(null), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isNumber(), TypeError)
        done()
    })

    it(`(${++counter}) Symbol is not a number`, (done) => {
        assert.isFalse(Checker.isNumber(global.TEST_SYM2))
        expect(Checker.isNumber(global.TEST_SYM2)).to.be.a('boolean')
        done()
    })
})
