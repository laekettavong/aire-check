/* eslint-env mocha */
/* global undefinedArg */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.booleansOnly', () => {
    let counter = 0

    it(`(${++counter}) Boolean argment will not throw 'TypeError'`, (done) => {
        expect(() => Checker.booleansOnly(true)).not.to.throw(TypeError)
        expect(() => Checker.booleansOnly(false)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Non boolean will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.booleansOnly(global.strBool1), TypeError)
        expect(() => Checker.booleansOnly(global.STR_BOOL2)).to.throw(TypeError)
        expect(() => Checker.booleansOnly(global.INT_VAL2)).to.throw(TypeError)
        expect(() => Checker.booleansOnly(global.TEST_ARRAY2)).to.throw(TypeError)
        expect(() => Checker.booleansOnly(global.TEST_OBJ3)).to.throw(TypeError)
        expect(() => Checker.booleansOnly(global.TEST_SYM3)).to.throw(TypeError)
        expect(() => Checker.booleansOnly(global.TEST_FUNCT2)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.booleansOnly(null), TypeError)
        expect(() => Checker.booleansOnly(null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.booleansOnly(undefinedArg), ReferenceError)
        expect(() => Checker.booleansOnly(undefinedArg)).to.throw(ReferenceError)
        expect(() => Checker.booleansOnly(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.booleansOnly()).to.throw(TypeError)
        done()
    })
})
