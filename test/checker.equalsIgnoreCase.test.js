/* eslint-env mocha */
/* global undefinedArg1, undefinedArg2 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.equalsIgnoreCase', () => {
    let counter = 0

    it(`(${++counter}) Number comparison, 10 === 10`, (done) => {
        assert.isTrue(Checker.equalsIgnoreCase(global.STR_INT1, global.STR_INT1))
        expect(Checker.equalsIgnoreCase(global.STR_INT1, global.STR_INT1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String comparison, 'hello' === 'hello'`, (done) => {
        assert.isTrue(Checker.equalsIgnoreCase(global.STR_VAL2, global.STR_VAL2))
        expect(Checker.equalsIgnoreCase(global.STR_VAL2, global.STR_VAL2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String comparison, 'hello' === 'HELLO'`, (done) => {
        assert.isTrue(Checker.equalsIgnoreCase(global.STR_VAL2, global.STR_VAL3))
        expect(Checker.equalsIgnoreCase(global.STR_VAL2, global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String and number comparison will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(global.STR_INT2, global.INT_VAL5), TypeError)
        done()
    })

    it(`(${++counter}) Number and array comparison will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(global.TEST_ARRAY6, global.INT_VAL5), TypeError)
        done()
    })

    it(`(${++counter}) String and array comparison will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(global.TEST_ARRAY7, global.STR_INT2), TypeError)
        done()
    })

    it(`(${++counter}) Literal object comparison will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(global.TEST_OBJ5, global.STR_VAL2), TypeError)
        done()
    })

    it(`(${++counter}) Only one number argument will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(global.STR_VAL3), TypeError)
        done()
    })

    it(`(${++counter}) Symbol and Symbol comparison will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(global.TEST_SYM2, global.TEST_SYM2), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(), TypeError)
        done()
    })

    it(`(${++counter}) Undefined arguments throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(undefinedArg1, global.STR_VAL2), ReferenceError)
        assert.throws(() => Checker.equalsIgnoreCase(global.STR_VAL2, undefinedArg2), ReferenceError)
        assert.throws(() => Checker.equalsIgnoreCase(undefinedArg2), ReferenceError)

        done()
    })

    it(`(${++counter}) Null arguments will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.equalsIgnoreCase(null, null), TypeError)
        assert.throws(() => Checker.equalsIgnoreCase(global.STR_VAL2, undefined), TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.equalsIgnoreCase()).to.throw(TypeError)
        done()
    })
})
