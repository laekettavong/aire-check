/* eslint-env mocha */
/* global undefinedArg1 */

import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isNullOrUndefined', () => {
    let counter = 0

    it(`(${++counter}) String argument 'HELLO' is not null nor undefined`, (done) => {
        assert.isFalse(Checker.isNullOrUndefined(global.STR_VAL3))
        expect(Checker.isNullOrUndefined(global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String concatenated argument 'Test ' + 123 is not null nor undefined`, (done) => {
        assert.isFalse(Checker.isNullOrUndefined(global.STR_VAL3 + global.STR_VAL5))
        expect(Checker.isNullOrUndefined(global.STR_VAL3 + global.STR_VAL5)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Template literal with variable 'Test \${num}!' is not null nor undefined`, (done) => {
        assert.isFalse(Checker.isNullOrUndefined(`Test ${global.INT_VAL5}`))
        expect(Checker.isNullOrUndefined(`Test ${global.INT_VAL5}`)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number argument, 100 is not null nor undefined`, (done) => {
        assert.isFalse(Checker.isNullOrUndefined(global.INT_VAL3))
        expect(Checker.isNullOrUndefined(global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is not null nor undefined`, (done) => {
        assert.isFalse(Checker.isNullOrUndefined(global.TEST_ARRAY6))
        expect(Checker.isNullOrUndefined(global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object argument, {prop1: 100} is not null nor undefined`, (done) => {
        assert.isFalse(Checker.isNullOrUndefined(global.TEST_OBJ2))
        expect(Checker.isNullOrUndefined(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, true is not null nor undefined`, (done) => {
        assert.isFalse(Checker.isNullOrUndefined(true))
        expect(Checker.isNullOrUndefined(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isNullOrUndefined(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument, null is null`, (done) => {
        assert.isTrue(Checker.isNullOrUndefined(null))
        expect(Checker.isNullOrUndefined(null)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) No arguments passed in is undefined`, (done) => {
        assert.isTrue(Checker.isNullOrUndefined())
        expect(Checker.isNullOrUndefined()).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Symbol is not null no undefined`, (done) => {
        assert.isFalse(Checker.isNullOrUndefined(global.TEST_SYM2))
        expect(Checker.isNullOrUndefined(global.TEST_SYM2)).to.be.a('boolean')
        done()
    })
})
