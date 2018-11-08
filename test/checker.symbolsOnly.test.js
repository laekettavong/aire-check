/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.symbolsOnly', () => {
    let counter = 0
    it(`(${++counter}) Symbol arguments will not throw 'TypeError'`, (done) => {
        expect(() => Checker.symbolsOnly(global.TEST_SYM1)).not.to.throw(TypeError)
        expect(() => Checker.symbolsOnly(global.TEST_SYM1, global.TEST_SYM2, global.TEST_SYM3, global.TEST_SYM4)).not.to.throw(TypeError)
        expect(() => Checker.symbolsOnly(global.TEST_SYM3, global.TEST_SYM1, global.TEST_SYM2)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Non symbol will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.symbolsOnly(global.STR_VAL2, true), TypeError)
        expect(() => Checker.symbolsOnly(global.TEST_SYM3, false, global.STR_VAL3, global.TEST_SYM4)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw Error`, (done) => {
        assert.throws(() => Checker.symbolsOnly(undefinedArg1, global.TEST_SYM2), ReferenceError)
        expect(() => Checker.symbolsOnly(global.TEST_SYM2, undefinedArg1)).to.throw(ReferenceError)
        expect(() => Checker.symbolsOnly(global.TEST_SYM1, global.TEST_SYM2, global.TEST_SYM3, undefinedArg1, global.TEST_SYM4v)).to.throw(ReferenceError)
        expect(() => Checker.symbolsOnly(global.TEST_SYM5, undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.symbolsOnly(null), TypeError)
        expect(() => Checker.symbolsOnly(global.STR_VAL4, null)).to.throw(TypeError)
        expect(() => Checker.symbolsOnly(global.STR_VAL2, global.STR_VAL3, null, global.STR_VAL4)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.symbolsOnly()).to.throw(TypeError)
        done()
    })
})
