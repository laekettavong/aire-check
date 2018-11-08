/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isDate', () => {
    let counter = 0
    it(`(${++counter}) Date arguments will not throw 'TypeError'`, (done) => {
        assert.isTrue(Checker.isDate(global.TEST_DATE1))
        assert.isTrue(Checker.isDate(global.TEST_DATE2))
        assert.isTrue(Checker.isDate(global.TEST_DATE3))
        assert.isTrue(Checker.isDate(global.TEST_DATE4))
        assert.isTrue(Checker.isDate(global.TEST_DATE5))
        expect(Checker.isDate(global.TEST_DATE1)).to.be.a('boolean')
        expect(() => Checker.isDate(global.TEST_DATE3)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Valid non date will throw return false`, (done) => {
        assert.isFalse(Checker.isDate(global.STR_VAL3))
        assert.isFalse(Checker.isDate(global.STR_INT2))
        assert.isFalse(Checker.isDate(global.TEST_SYM3))
        assert.isFalse(Checker.isDate(global.TEST_OBJ8))
        assert.isFalse(Checker.isDate(global.TEST_ARRAY2))
        expect(Checker.isDate(global.TEST_OBJ8)).to.be.a('boolean')
        expect(() => Checker.isDate(global.TEST_DATE3)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw Error`, (done) => {
        assert.throws(() => Checker.isDate(undefinedArg1), ReferenceError)
        expect(() => Checker.isDate(undefinedArg1)).to.throw(ReferenceError)
        expect(() => Checker.isDate(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.isDate(null), TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.isDate()).to.throw(TypeError)
        done()
    })
})
