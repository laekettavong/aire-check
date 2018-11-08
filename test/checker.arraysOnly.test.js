/* eslint-env mocha */
/* global undefinedArg */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.arraysOnly', () => {
    let counter = 0

    it(`(${++counter}) Array arguments will not throw 'TypeError'`, (done) => {
        expect(() => Checker.arraysOnly([global.TEST_ARRAY5])).not.to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.TEST_ARRAY2, global.TEST_ARRAY3, global.TEST_ARRAY4)).not.to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.TEST_ARRAY1, global.TEST_ARRAY5, global.TEST_ARRAY1)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Non array will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.arraysOnly(global.STR_VAL2, true), TypeError)
        expect(() => Checker.arraysOnly(false, global.STR_VAL5)).to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.INT_VAL4)).to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.TEST_ARRAY2, global.TEST_ARRAY1, global.TEST_SYM2)).to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.TEST_ARRAY1, global.TEST_ARRAY4, global.TEST_OBJ2)).to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.TEST_FUNCT1, global.TEST_ARRAY4, global.TEST_OBJ2)).to.throw(TypeError)
        expect(() => Checker.arraysOnly(global.TEST_FUNCT3)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.arraysOnly(null), TypeError)
        expect(() => Checker.arraysOnly(null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.arraysOnly(undefinedArg, global.TEST_SYM1), ReferenceError)
        expect(() => Checker.arraysOnly(global.TEST_SYM3, undefinedArg)).to.throw(ReferenceError)
        expect(() => Checker.arraysOnly(undefinedArg)).to.throw(ReferenceError)
        expect(() => Checker.arraysOnly(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.arraysOnly()).to.throw(TypeError)
        done()
    })
})
