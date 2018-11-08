/* eslint-env mocha */
/* global undefinedArg1, undefinedArg2 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.equals', () => {
    let counter = 0

    it(`(${++counter}) Number comparison, 500 == 500`, (done) => {
        assert.isTrue(Checker.equals(global.INT_VAL4, global.INT_VAL4))
        expect(Checker.equals(global.INT_VAL4, global.INT_VAL4)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and string comparison, 1000 == '1000'`, (done) => {
        assert.isTrue(Checker.equals(global.INT_VAL5, global.STR_INT2))
        expect(Checker.equals(global.INT_VAL5, global.STR_INT2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and string comparison, '1000' == 100`, (done) => {
        assert.isTrue(Checker.equals(global.STR_INT2, global.INT_VAL5))
        expect(Checker.equals(global.STR_INT2, global.INT_VAL5)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String comparison, '1000' == '1000'`, (done) => {
        assert.isTrue(Checker.equals(global.STR_INT2, global.STR_INT2))
        expect(Checker.equals(global.STR_INT2, global.STR_INT2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number comparison, 100 != 500`, (done) => {
        assert.isFalse(Checker.equals(global.INT_VAL3, global.INT_VAL4))
        expect(Checker.equals(global.INT_VAL3, global.INT_VAL4)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and array comparison, 1000 == [1000]`, (done) => {
        assert.isTrue(Checker.equals(global.INT_VAL5, global.TEST_ARRAY6))
        expect(Checker.equals(global.INT_VAL5, global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and array comparison, 1000 == ['1000']`, (done) => {
        assert.isTrue(Checker.equals(global.INT_VAL5, global.TEST_ARRAY7))
        expect(Checker.equals(global.INT_VAL5, global.TEST_ARRAY7)).to.be.a('boolean')
        done()
    })


    it(`(${++counter}) Numberand literal object comparison, 100 != {prop1: 100}`, (done) => {
        assert.isFalse(Checker.equals(global.INT_VAL3, global.TEST_OBJ2))
        expect(Checker.equals(global.INT_VAL3, global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })


    it(`(${++counter}) String comparison, 'hello' != 'HELLO'`, (done) => {
        assert.isFalse(Checker.equals(global.STR_VAL2, global.STR_VAL3))
        expect(Checker.equals(global.STR_VAL2, global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String and boolean comparison, 'hello' != true`, (done) => {
        assert.isFalse(Checker.equals(global.STR_VAL2, true))
        expect(Checker.equals(global.STR_VAL2, true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and boolean comparison, 500 != false`, (done) => {
        assert.isFalse(Checker.equals(global.INT_VAL4, false))
        expect(Checker.equals(global.INT_VAL4, false)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array comparison, [] != []`, (done) => {
        assert.isFalse(Checker.equals(global.TEST_ARRAY1, global.TEST_ARRAY9))
        expect(Checker.equals(global.TEST_ARRAY1, global.TEST_ARRAY1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object comparison, {prop1: true} != {prop1: true}`, (done) => {
        assert.isFalse(Checker.equals(global.TEST_OBJ6, global.TEST_OBJ7))
        expect(Checker.equals(global.TEST_OBJ6, global.TEST_OBJ7)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object and array comparison, {value: true} != [true]`, (done) => {
        assert.isFalse(Checker.equals({ value: true }, [true]))
        expect(Checker.equals({ value: true }, [true])).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Only one number argument`, (done) => {
        assert.throws(() => Checker.equals(global.INT_VAL2), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.equals(), TypeError)
        done()
    })

    it(`(${++counter}) Undefined arguments throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.equals(undefinedArg1, undefinedArg2), ReferenceError)
        done()
    })

    it(`(${++counter}) Null arguments will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equals(null, null), TypeError)
        assert.throws(() => Checker.equals(global.INT_VAL2, null), TypeError)
        assert.throws(() => Checker.equals(null, global.STR_INT1), TypeError)
        done()
    })

    it(`(${++counter}) Symbol and Symbol comparison, Symbol('hello') !== Symbol('hello')`, (done) => {
        assert.isFalse(Checker.equals(global.TEST_SYM2, global.TEST_SYM5))
        expect(Checker.equals(global.TEST_SYM2, global.TEST_SYM5)).to.be.a('boolean')
        done()
    })
})
