/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.stringsArrayObjectsOnly', () => {
    let counter = 0
    it(`(${++counter}) String, array, or literal object arguments will not throw 'TypeError'`, (done) => {
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_OBJ3)).not.to.throw(TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(global.STR_VAL3, global.TEST_OBJ3, global.TEST_OBJ3)).not.to.throw(TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_OBJ1, global.STR_VAL2, global.TEST_OBJ4, global.TEST_ARRAY2, { value: 'hello' })).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) All data types not string, array, or  object will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.stringsArrayObjectsOnly(global.TEST_OBJ5, global.STR_VAL2, true), TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(false, global.TEST_OBJ5, global.TEST_ARRAY7)).to.throw(TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(global.INT_VAL3)).to.throw(TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_OBJ5, global.TEST_ARRAY6, global.TEST_SYM2)).to.throw(TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_ARRAY2, global.TEST_ARRAY4, false, global.TEST_SYM2)).to.throw(TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_ARRAY2, global.TEST_ARRAY5, global.TEST_SYM2, global.TEST_SYM2)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.stringsArrayObjectsOnly(global.TEST_OBJ5, undefinedArg1, global.TEST_SYM2), ReferenceError)
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_OBJ5, global.TEST_SYM2, undefinedArg1)).to.throw(ReferenceError)
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_ARRAY3, global.STR_VAL3, undefinedArg1, global.TEST_OBJ5)).to.throw(ReferenceError)
        expect(() => Checker.stringsArrayObjectsOnly(global.STR_VAL2, global.TEST_ARRAY2, undefinedArg1, global.TEST_OBJ5)).to.throw(ReferenceError)
        done()
    })


    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.stringsArrayObjectsOnly(null), TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_ARRAY8, null)).to.throw(TypeError)
        expect(() => Checker.stringsArrayObjectsOnly(global.TEST_ARRAY2, global.TEST_ARRAY8, null, global.TEST_ARRAY3)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.stringsArrayObjectsOnly()).to.throw(TypeError)
        done()
    })
})
