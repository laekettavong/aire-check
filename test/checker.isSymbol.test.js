/* eslint-env mocha */
/* global undefinedArg1 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.isSymbol', () => {
    let counter = 0

    it(`(${++counter}) String argument 'HELLO' is not asymbol`, (done) => {
        assert.isFalse(Checker.isSymbol(global.STR_VAL3))
        expect(Checker.isSymbol(global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Template literal with variable 'hello \${num}!' is not a symbol`, (done) => {
        assert.isFalse(Checker.isSymbol(`hello ${global.STR_VAL2}`))
        expect(Checker.isSymbol(`hello ${global.STR_VAL2}`)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Symbol argument, Symbol() is a symbol`, (done) => {
        assert.isTrue(Checker.isSymbol(global.TEST_SYM1))
        expect(Checker.isSymbol(global.TEST_SYM1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Symbol argument, Symbol('hello') is a symbol`, (done) => {
        assert.isTrue(Checker.isSymbol(global.TEST_SYM2))
        expect(Checker.isSymbol(global.TEST_SYM2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array argument, [1000] is not a symbol`, (done) => {
        assert.isFalse(Checker.isSymbol(global.TEST_ARRAY6))
        expect(Checker.isSymbol(global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object argument, {prop1: 100} is not a symbol`, (done) => {
        assert.isFalse(Checker.isSymbol(global.TEST_OBJ2))
        expect(Checker.isSymbol(global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Boolean argument, true is not a symbol`, (done) => {
        assert.isFalse(Checker.isSymbol(true))
        expect(Checker.isSymbol(true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Undefined argument throws 'ReferenceError'`, (done) => {
        assert.throws(() => Checker.isSymbol(undefinedArg1), ReferenceError)
        done()
    })

    it(`(${++counter}) Null argument, null is not a symbol`, (done) => {
        assert.throws(() => Checker.isSymbol(null), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.isSymbol(), TypeError)
        done()
    })
})
