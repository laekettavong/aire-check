/* eslint-env mocha */
/* global undefinedArg1, undefinedArg2 */
import { assert, expect } from 'chai'
import Checker from '../lib/Checker'

describe('Checker.strictEquals', () => {
    let counter = 0

    it(`(${++counter}) Number comparison, 10 === 10`, (done) => {
        assert.isTrue(Checker.strictEquals(global.INT_VAL2, global.INT_VAL2))
        expect(Checker.strictEquals(global.INT_VAL2, global.INT_VAL2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and string comparison, 10 !== '10'`, (done) => {
        assert.isFalse(Checker.strictEquals(global.INT_VAL2, global.STR_INT1))
        expect(Checker.strictEquals(global.INT_VAL2, global.STR_INT1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and string comparison, '10' !== 10`, (done) => {
        assert.isFalse(Checker.strictEquals(global.STR_INT1, global.INT_VAL2))
        expect(Checker.strictEquals(global.STR_INT1, global.INT_VAL2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String comparison, '10' === '10'`, (done) => {
        assert.isTrue(Checker.strictEquals(global.STR_INT1, global.STR_INT1))
        expect(Checker.strictEquals(global.STR_INT1, global.STR_INT1)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number comparison, 10 !== 100`, (done) => {
        assert.isFalse(Checker.strictEquals(global.INT_VAL2, global.INT_VAL3))
        expect(Checker.strictEquals(global.INT_VAL2, global.INT_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and array comparison, 1000 !== [1000]`, (done) => {
        assert.isFalse(Checker.strictEquals(global.INT_VAL5, global.TEST_ARRAY6))
        expect(Checker.strictEquals(global.INT_VAL5, global.TEST_ARRAY6)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and array comparison, 1000 !== ['1000']`, (done) => {
        assert.isFalse(Checker.strictEquals(global.INT_VAL5, global.TEST_ARRAY7))
        expect(Checker.strictEquals(global.INT_VAL5, global.TEST_ARRAY7)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and liter object comparison, 100 !== {value: 100}`, (done) => {
        assert.isFalse(Checker.strictEquals(global.INT_VAL3, global.TEST_OBJ8))
        expect(Checker.strictEquals(global.INT_VAL3, global.TEST_OBJ8)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and literal object comparison, 100 !== {value: 100}`, (done) => {
        assert.isFalse(Checker.strictEquals(global.INT_VAL3, global.TEST_OBJ2))
        expect(Checker.strictEquals(global.INT_VAL3, global.TEST_OBJ2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String comparison, 'hello' === 'hello'`, (done) => {
        assert.isTrue(Checker.strictEquals(global.STR_VAL2, global.STR_VAL2))
        expect(Checker.strictEquals(global.STR_VAL2, global.STR_VAL2)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String comparison, 'helloe !== 'HELLO'`, (done) => {
        assert.isFalse(Checker.strictEquals(global.STR_VAL2, global.STR_VAL3))
        expect(Checker.strictEquals(global.STR_VAL2, global.STR_VAL3)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) String and boolean comparison, 'hello' !== true`, (done) => {
        assert.isFalse(Checker.strictEquals(global.STR_VAL2, true))
        expect(Checker.strictEquals(global.STR_VAL2, true)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Number and boolean comparison, 100 !== false`, (done) => {
        assert.isFalse(Checker.strictEquals(global.INT_VAL3, false))
        expect(Checker.strictEquals(global.INT_VAL3, false)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Array comparison, [] !== []`, (done) => {
        assert.isTrue(Checker.strictEquals(global.TEST_ARRAY1, global.TEST_ARRAY1))
        assert.isFalse(Checker.strictEquals(global.TEST_ARRAY1, global.TEST_ARRAY9))
        expect(Checker.strictEquals(global.TEST_ARRAY1, global.TEST_ARRAY9)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Literal object comparison, {value: true} !== {value: true}`, (done) => {
        assert.isTrue(Checker.strictEquals(global.TEST_OBJ6, global.TEST_OBJ6))
        assert.isFalse(Checker.strictEquals(global.TEST_OBJ6, global.TEST_OBJ7))
        expect(Checker.strictEquals(global.TEST_OBJ6, global.TEST_OBJ7)).to.be.a('boolean')
        done()
    })

    it(`(${++counter}) Only one number argument`, (done) => {
        assert.throws(() => Checker.strictEquals(global.INT_VAL5), TypeError)
        done()
    })

    it(`(${++counter}) No arguments passed in`, (done) => {
        assert.throws(() => Checker.strictEquals(), TypeError)
        done()
    })

    it(`(${++counter}) Undefined arguments throws \`ReferenceError\``, (done) => {
        assert.throws(() => Checker.strictEquals(undefinedArg1, undefinedArg2), ReferenceError)
        assert.throws(() => Checker.strictEquals(undefinedArg1, global.STR_VAL3), ReferenceError)
        assert.throws(() => Checker.strictEquals(global.STR_VAL5, undefinedArg2), ReferenceError)
        done()
    })

    it(`(${++counter}) Null arguments, null does not equal null`, (done) => {
        assert.throws(() => Checker.strictEquals(null, null), TypeError)
        done()
    })

    it(`(${++counter}) Symbol and Symbol comparison, Symbol(\`hello\`) !== Symbol(\`hello\`)`, (done) => {
        assert.isTrue(Checker.strictEquals(global.TEST_SYM3, global.TEST_SYM3))
        assert.isFalse(Checker.strictEquals(global.TEST_SYM3, global.TEST_SYM5))
        expect(Checker.strictEquals(global.TEST_SYM5, global.TEST_SYM3)).to.be.a('boolean')
        done()
    })
})
