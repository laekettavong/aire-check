/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.objectsOnly', () => {
    let counter = 0
    it(`(${++counter}) Literal object arguments will not throw 'TypeError'`, (done) => {
        expect(() => Checker.objectsOnly(global.TEST_OBJ2)).not.to.throw(TypeError)
        expect(() => Checker.objectsOnly(global.TEST_OBJ3, global.TEST_OBJ1)).not.to.throw(TypeError)
        expect(() => Checker.objectsOnly(global.TEST_OBJ1, global.TEST_OBJ4, global.TEST_OBJ7)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Non literal object will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.objectsOnly(global.TEST_OBJ3, global.STR_VAL3, true), TypeError)
        expect(() => Checker.objectsOnly(false, global.TEST_OBJ5, global.STR_VAL4)).to.throw(TypeError)
        expect(() => Checker.objectsOnly(global.INT_VAL3)).to.throw(TypeError)
        expect(() => Checker.objectsOnly(global.TEST_OBJ5, global.TEST_ARRAY2, global.TEST_SYM5)).to.throw(TypeError)
        expect(() => Checker.objectsOnly(global.TEST_ARRAY2, global.TEST_ARRAY5, global.TEST_OBJ3)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.objectsOnly(global.TEST_OBJ5, undefinedArg1, global.TEST_SYM2), ReferenceError)
        expect(() => Checker.objectsOnly(global.TEST_OBJ5, global.TEST_SYM2, undefinedArg1)).to.throw(ReferenceError)
        expect(() => Checker.objectsOnly(undefinedArg1, global.TEST_OBJ5)).to.throw(ReferenceError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.objectsOnly(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.objectsOnly(), TypeError)
        done()
    })

    it(`(${++counter}) Null arguments will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.objectsOnly(null, null), TypeError)
        assert.throws(() => Checker.objectsOnly(global.INT_VAL2, null), TypeError)
        assert.throws(() => Checker.objectsOnly(null, global.STR_INT1), TypeError)
        done()
    })
})
