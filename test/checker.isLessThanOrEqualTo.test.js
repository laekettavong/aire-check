/* eslint-env mocha */
/* global undefinedArg1, undefinedArg2 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isLessThanOrEqualTo', () => {
    let counter = 0

    it(`(${++counter}) Number comparison, 100 <= 10`, (done) => {
        assert.isFalse(Checker.isLessThanOrEqualTo(global.INT_VAL3, global.INT_VAL2))
        expect(Checker.isLessThanOrEqualTo(global.INT_VAL3, global.INT_VAL2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number comparison, 100 <= 100`, (done) => {
        assert.isTrue(Checker.isLessThanOrEqualTo(global.INT_VAL3, global.INT_VAL3))
        expect(Checker.isLessThanOrEqualTo(global.INT_VAL3, global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number comparison, 1000 <= -10`, (done) => {
        assert.isFalse(Checker.isLessThanOrEqualTo(global.INT_VAL5, global.INT_VAL1))
        expect(Checker.isLessThanOrEqualTo(global.INT_VAL5, global.INT_VAL1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and string comparison, '1000' <= 100`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(global.STR_INT2, global.INT_VAL3), TypeError)
        done()
    })

    it(`(${++counter}) Number and string comparison, 500 <= '1000'`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(global.INT_VAL4, global.STR_INT2), TypeError)
        done()
    })

    it(`(${++counter}) Number and array comparison, [1000] <= 100`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(global.TEST_ARRAY7, global.INT_VAL3), TypeError)
        done()
    })

    it(`(${++counter}) Number and literal object comparison, {prop1: 100} <= 100`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(global.TEST_OBJ2, global.INT_VAL3), TypeError)
        done()
    })

    it(`(${++counter}) String comparison, '1000' <= '1000'`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(global.STR_INT2, global.STR_INT2), TypeError)
        done()
    })

    it(`(${++counter}) Only one number argument`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(global.INT_VAL2), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(), TypeError)
        done()
    })

    it(`(${++counter}) Undefined arguments throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(undefinedArg1, undefinedArg2), ReferenceError)
        done()
    })

    it(`(${++counter}) Null arguments, null !== string`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(null, null), TypeError)
        done()
    })

    it(`(${++counter}) Symbol will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isLessThanOrEqualTo(global.TEST_SYM4, global.INT_VAL3), TypeError)
        done()
    })
})
