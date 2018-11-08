/* eslint-env mocha */
/* global undefinedArg */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.definedArgsOnly', () => {
    let counter = 0

    it(`(${++counter}) Defined argument will not throw 'TypeError'`, (done) => {
        expect(() => Checker.definedArgsOnly(true)).not.to.throw(TypeError)
        expect(() => Checker.definedArgsOnly(false, global.STR_BOOL2)).not.to.throw(TypeError)
        expect(() => Checker.definedArgsOnly(global.INT_VAL3)).not.to.throw(TypeError)
        expect(() => Checker.definedArgsOnly(global.STR_VAL3)).not.to.throw(TypeError)
        expect(() => Checker.definedArgsOnly(global.TEST_ARRAY5)).not.to.throw(TypeError)
        expect(() => Checker.definedArgsOnly(global.TEST_OBJ4, global.TEST_FUNCT2)).not.to.throw(TypeError)
        expect(() => Checker.definedArgsOnly(global.TEST_SYM2, global.STR_BOOL2)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.arraysOnly(null), TypeError)
        expect(() => Checker.arraysOnly(global.STR_VAL3, null)).to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.TEST_ARRAY1, global.TEST_OBJ2, null, true)).to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.INT_VAL3, global.TEST_SYM2, null, global.TEST_OBJ1)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined argument, throws 'TypeError'`, (done) => {
        assert.throws(() => Checker.definedArgsOnly(undefined), TypeError)
        expect(() => Checker.definedArgsOnly(true, undefined)).to.throw(TypeError)
        assert.throws(() => Checker.definedArgsOnly(global.TEST_FUNCT2, undefinedArg), ReferenceError)
        expect(() => Checker.definedArgsOnly(undefinedArg, global.TEST_ARRAY3, undefinedArg)).to.throw(ReferenceError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.definedArgsOnly()).to.throw(TypeError)
        done()
    })
})
