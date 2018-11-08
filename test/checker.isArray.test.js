/* eslint-env mocha */
/* global undefinedArg */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isArray', () => {
    let counter = 0

    it(`(${++counter}) String is not an array`, (done) => {
        assert.isFalse(Checker.isArray(global.STR_VAL5))
        expect(Checker.isArray(global.STR_VAL5)).to.be.a('boolean')
        expect(Checker.isArray(global.STR_VAL5, global.STR_VAL5)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String concatenated is not an array`, (done) => {
        assert.isFalse(Checker.isArray(global.STR_VAL3 + global.STR_VAL5))
        expect(Checker.isArray(global.STR_VAL3 + global.STR_VAL5)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number is not an array`, (done) => {
        assert.isFalse(Checker.isArray(global.INT_VAL3))
        expect(Checker.isArray(global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is an array`, (done) => {
        assert.isTrue(Checker.isArray(global.TEST_ARRAY6))
        expect(Checker.isArray(global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object in not an array`, (done) => {
        assert.isFalse(Checker.isArray(global.TEST_OBJ2))
        expect(Checker.isArray(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean is not an array`, (done) => {
        assert.isFalse(Checker.isArray(true))
        assert.isFalse(Checker.isArray(false))
        expect(Checker.isArray(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument will throw Error`, (done) => {
        assert.throws(() => Checker.isArray(undefinedArg), ReferenceError)
        assert.throws(() => Checker.isArray(undefined), TypeError)
        done()
    })

    it(`(${++counter}) Null argument, null is not an array`, (done) => {
        assert.throws(() => Checker.isArray(null), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isArray(), TypeError)
        done()
    })

    it(`(${++counter}) Symbol is not an array`, (done) => {
        assert.isFalse(Checker.isArray(global.TEST_SYM2))
        expect(Checker.isArray(global.TEST_SYM2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.isArray()).to.throw(TypeError)
        done()
    })
})
