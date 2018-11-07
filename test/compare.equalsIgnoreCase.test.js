import { assert, expect } from 'chai'
import Check from '..'

describe(`Check.equalsIgnoreCase`, () => {
    let counter = 0
    // Test case: 1
    it(`(${++counter}) Number comparison, 10 === 10`, (done) => {
        assert.isTrue(Check.equalsIgnoreCase('10', '10'))
        expect(Check.equalsIgnoreCase('10', '10')).to.be.a('boolean')
        done()
    })

    // Test case: 2
    it(`(${++counter}) String comparison, \'abcdefg\' === \'abcdefg\'`, (done) => {
        assert.isTrue(Check.equalsIgnoreCase('abcdefg', 'abcdefg'))
        expect(Check.equalsIgnoreCase('abcdefg', 'abcdefg')).to.be.a('boolean')
        done()
    })

    // Test case: 3
    it(`(${++counter}) String comparison, \'abcdefg\' === \'ABCDEFG\'`, (done) => {
        assert.isTrue(Check.equalsIgnoreCase('abcdefg', 'ABCDEFG'))
        expect(Check.equalsIgnoreCase('abcdefg', 'ABCDEFG')).to.be.a('boolean')
        done()
    })

    // Test case: 4
    it(`(${++counter}) String comparison, \'ABCDEFG\' === \'abcdefg\'`, (done) => {
        assert.isTrue(Check.equalsIgnoreCase('ABCDEFG', 'abcdefg'))
        expect(Check.equalsIgnoreCase('ABCDEFG', 'abcdefg')).to.be.a('boolean')
        done()
    })

    // Test case: 5
    it(`(${++counter}) String and number comparison, \'1000\' !== 1000`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.equalsIgnoreCase('1000', 1000))
        }, TypeError)
        done()
    })

    // Test case: 6
    it(`(${++counter}) Number and array comparison, [1000] !== 1000`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.equalsIgnoreCase([1000], 1000))
        }, TypeError)
        done()
    })

    // Test case: 7
    it(`(${++counter}) Number and array comparison, [\'abcdefg\'] !== 'abcdefg'`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.equalsIgnoreCase(['abcdefg'], 'abcdefg'))
        }, TypeError)
        done()
    })

    // Test case: 8
    it(`(${++counter}) Literal object comparison, {value: \'abcdefg\'} !== 'abcdefg'`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.equalsIgnoreCase({ value: 'abcdefg' }, 'abcdefg'))
        }, TypeError)
        done()
    })
})

