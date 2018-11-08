/* eslint-env mocha */
/* global undefinedArg1*/
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isEmpty', () => {
    let counter = 0

    it(`(${++counter}) String argument 'HELLO' is not empty`, (done) => {
        assert.isFalse(Checker.isEmpty(global.STR_VAL3))
        expect(Checker.isEmpty(global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Empty string argument is empty`, (done) => {
        assert.isTrue(Checker.isEmpty(global.STR_VAL1))
        expect(Checker.isEmpty(global.STR_VAL1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array with elements is not empty`, (done) => {
        assert.isFalse(Checker.isEmpty(global.TEST_ARRAY4))
        expect(Checker.isEmpty(global.TEST_ARRAY4)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array with no elements is empty`, (done) => {
        assert.isTrue(Checker.isEmpty(global.TEST_ARRAY1))
        expect(Checker.isEmpty(global.TEST_ARRAY1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object with properties is not empty`, (done) => {
        assert.isFalse(Checker.isEmpty(global.TEST_OBJ5))
        expect(Checker.isEmpty(global.TEST_OBJ5)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object with not properties is empty`, (done) => {
        assert.isTrue(Checker.isEmpty(global.TEST_OBJ1))
        expect(Checker.isEmpty(global.TEST_OBJ1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number argument, will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isEmpty(global.INT_VAL3), TypeError)
        done()
    })

    it(`(${++counter}) Boolean argument, will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isEmpty(false), TypeError)
        done()
    })


    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isEmpty(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isEmpty(null), TypeError)
        done()
    })

    it(`(${++counter}) Symbol('hello') argument will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isEmpty(global.TEST_SYM2), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isEmpty(), TypeError)
        done()
    })
})
