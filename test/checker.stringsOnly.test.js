/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.stringsOnly', () => {
    let counter = 0
    it(`(${++counter}) String arguments will not throw 'TypeError'`, (done) => {
        expect(() => Checker.stringsOnly(global.STR_VAL2)).not.to.throw(TypeError)
        expect(() => Checker.stringsOnly(global.STR_VAL1, global.STR_VAL2, global.STR_VAL3, global.STR_VAL4, global.STR_VAL2)).not.to.throw(TypeError)
        expect(() => Checker.stringsOnly(global.STR_VAL2, global.STR_INT1, global.STR_INT2)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Non string will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.stringsOnly(global.STR_VAL2, true), TypeError)
        expect(() => Checker.stringsOnly(false, global.STR_VAL3)).to.throw(TypeError)
        expect(() => Checker.stringsOnly(global.INT_VAL3, global.STR_INT2)).to.throw(TypeError)
        expect(() => Checker.stringsOnly(global.STR_VAL2, global.TEST_ARRAY7, global.STR_VAL3)).to.throw(TypeError)
        expect(() => Checker.stringsOnly(global.STR_VAL1, global.STR_VAL2, global.STR_VAL3, global.TEST_OBJ8)).to.throw(TypeError)
        expect(() => Checker.stringsOnly(global.STR_VAL3, global.STR_VAL2, global.STR_VAL3, global.STR_VAL5, global.TEST_SYM4, global.STR_VAL1)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.stringsOnly(undefinedArg1), ReferenceError)
        expect(() => Checker.stringsOnly(undefinedArg1)).to.throw(ReferenceError)
        expect(() => Checker.stringsOnly(global.STR_VAL4, undefinedArg1)).to.throw(ReferenceError)
        expect(() => Checker.stringsOnly(global.STR_VAL3, global.STR_VAL2, undefinedArg1, global.STR_VAL5)).to.throw(ReferenceError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.stringsOnly(null), TypeError)
        expect(() => Checker.stringsOnly(global.STR_VAL4, null)).to.throw(TypeError)
        expect(() => Checker.stringsOnly(global.STR_VAL2, global.STR_VAL3, null, global.STR_VAL4)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.stringsOnly()).to.throw(TypeError)
        done()
    })
})
