/* eslint-env mocha */
/* global undefinedArg */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.datesOnly', () => {
    let counter = 0

    it(`(${++counter}) Date argments will not throw 'TypeError'`, (done) => {
        expect(() => Checker.datesOnly(global.TEST_DATE1)).not.to.throw(TypeError)
        expect(() => Checker.datesOnly(global.TEST_DATE1, global.TEST_DATE2)).not.to.throw(TypeError)
        expect(() => Checker.datesOnly(global.TEST_DATE1, global.TEST_DATE2, global.TEST_DATE3, global.TEST_DATE4)).not.to.throw(TypeError)
        expect(() => Checker.datesOnly(global.TEST_DATE1, global.TEST_DATE2, global.TEST_DATE3, global.TEST_DATE4, global.TEST_DATE5)).not.to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Non date will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.datesOnly(global.strBool1), TypeError)
        expect(() => Checker.datesOnly(global.TEST_DATE1, global.STR_BOOL2)).to.throw(TypeError)
        expect(() => Checker.datesOnly(global.INT_VAL2), global.TEST_DATE1).to.throw(TypeError)
        expect(() => Checker.datesOnly(global.TEST_DATE1, global.TEST_DATE2, global.TEST_ARRAY2)).to.throw(TypeError)
        expect(() => Checker.datesOnly(global.TEST_OBJ3, global.TEST_DATE1)).to.throw(TypeError)
        expect(() => Checker.datesOnly(global.TEST_DATE1, global.TEST_DATE2, global.TEST_DATE3, global.TEST_SYM3, global.TEST_DATE5)).to.throw(TypeError)
        expect(() => Checker.datesOnly(global.TEST_DATE2, global.TEST_DATE3global.TEST_FUNCT2, global.TEST_DATE1)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Null will throw 'TypeError'`, (done) => {
        assert.throws(() => Checker.datesOnly(null), TypeError)
        expect(() => Checker.datesOnly(null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Undefined will throw 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.datesOnly(undefinedArg), ReferenceError)
        expect(() => Checker.datesOnly(undefinedArg)).to.throw(ReferenceError)
        expect(() => Checker.datesOnly(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) No argument passed in`, (done) => {
        expect(() => Checker.datesOnly()).to.throw(TypeError)
        done()
    })
})
