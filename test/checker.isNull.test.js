/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isNull', () => {
    let counter = 0

    it(`(${++counter}) String argument 'HELLO' is not null`, (done) => {
        assert.isFalse(Checker.isArray(global.STR_VAL3))
        expect(Checker.isNull(global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String concatenated arguments is not null`, (done) => {
        assert.isFalse(Checker.isNull(global.STR_VAL3 + global.STR_VAL5))
        expect(Checker.isNull(global.STR_VAL3 + global.STR_VAL5)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number argument, 100 is not null`, (done) => {
        assert.isFalse(Checker.isNull(global.INT_VAL3))
        expect(Checker.isNull(global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is not null`, (done) => {
        assert.isFalse(Checker.isNull(global.TEST_ARRAY7))
        expect(Checker.isNull(global.TEST_ARRAY7)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object argument, {prop1: 100} is not null`, (done) => {
        assert.isFalse(Checker.isNull(global.TEST_OBJ2))
        expect(Checker.isNull(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, true is not null`, (done) => {
        assert.isFalse(Checker.isNull(true))
        expect(Checker.isNull(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isNull(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument, null is null`, (done) => {
        assert.isTrue(Checker.isNull(null))
        expect(Checker.isNull(null)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isNull(), TypeError)
        done()
    })

    it(`(${++counter}) Symbol is not null`, (done) => {
        assert.isFalse(Checker.isNull(global.TEST_SYM2))
        expect(Checker.isNull(global.TEST_SYM2)).to.be.a('boolean')
        done()
    })
})
