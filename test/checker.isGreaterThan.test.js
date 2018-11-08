/* eslint-env mocha */
/* global undefinedArg1, undefinedArg2 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isGreaterThan', () => {
    let counter = 0

    it(`(${++counter}) Number comparison, 500 > 100`, (done) => {
        assert.isTrue(Checker.isGreaterThan(global.INT_VAL4, global.INT_VAL3))
        expect(Checker.isGreaterThan(global.INT_VAL4, global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number comparison, 1000 > 1000`, (done) => {
        assert.isFalse(Checker.isGreaterThan(global.INT_VAL5, global.INT_VAL5))
        expect(Checker.isGreaterThan(global.INT_VAL5, global.INT_VAL5)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number comparison, 100 > 500`, (done) => {
        assert.isFalse(Checker.isGreaterThan(global.INT_VAL3, global.INT_VAL4))
        expect(Checker.isGreaterThan(global.INT_VAL3, global.INT_VAL4)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number comparison, 100 > -100`, (done) => {
        assert.isTrue(Checker.isGreaterThan(global.INT_VAL3, global.INT_VAL1))
        expect(Checker.isGreaterThan(global.INT_VAL3, global.INT_VAL1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and string comparison, 100 > '10'`, (done) => {
        assert.throws(() => Checker.isGreaterThan(global.INT_VAL3, global.STR_INT1), TypeError)
        done()
    })

    it(`(${++counter}) Number and string comparison, '1000' > 100`, (done) => {
        assert.throws(() => Checker.isGreaterThan(global.STR_INT2, global.INT_VAL3), TypeError)
        done()
    })

    it(`(${++counter}) String comparison, '1000' > '10'`, (done) => {
        assert.throws(() => Checker.isGreaterThan(global.STR_INT2, global.STR_INT1), TypeError)
        done()
    })

    it(`(${++counter}) Number and array comparison, 100 > [1000]`, (done) => {
        assert.throws(() => Checker.isGreaterThan(global.INT_VAL3, global.TEST_ARRAY6), TypeError)
        done()
    })

    it(`(${++counter}) Number and array comparison, {rop1:100} > 100`, (done) => {
        assert.throws(() => Checker.isGreaterThan(global.TEST_OBJ2, global.INT_VAL3), TypeError)
        done()
    })

    it(`(${++counter}) Number and boolean comparison, true > 100`, (done) => {
        assert.throws(() => Checker.isGreaterThan(true, global.INT_VAL3), TypeError)
        done()
    })

    it(`(${++counter}) Only one number argument`, (done) => {
        assert.throws(() => Checker.isGreaterThan(global.INT_VAL2), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isGreaterThan(), TypeError)
        done()
    })

    it(`(${++counter}) Undefined arguments will throw 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isGreaterThan(undefinedArg1, undefinedArg2), ReferenceError)
        done()
    })

    it(`(${++counter}) Null arguments will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isGreaterThan(null, null), TypeError)
        done()
    })

    it(`(${++counter}) Symbol will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isGreaterThan(global.TEST_SYM2, global.INT_VAL3), TypeError)
        done()
    })
})
