import { assert, expect } from 'chai'
import Check from '..'

describe(`Check.equals`, () => {
    let counter = 0
    // Test case: 1
    it(`(${++counter}) Number comparison, 10 === 10`, (done) => {
        assert.isTrue(Check.equals(10, 10))
        expect(Check.equals(10, 10)).to.be.a('boolean')
        done()
    })

    // Test case: 2
    it(`(${++counter}) Number and string comparison, 10 !== \'10\'`, (done) => {
        assert.isFalse(Check.equals(10, '10'))
        expect(Check.equals(10, '10')).to.be.a('boolean')
        done()
    })

    // Test case: 3
    it(`(${++counter}) Number and string comparison, \'10\' !== 10`, (done) => {
        assert.isFalse(Check.equals('10', 10))
        expect(Check.equals('10', 10)).to.be.a('boolean')
        done()
    })

    // Test case: 4
    it(`(${++counter}) String comparison, \'10\' === \'10\'`, (done) => {
        assert.isTrue(Check.equals('10', '10'))
        expect(Check.equals('10', '10')).to.be.a('boolean')
        done()
    })

    // Test case: 5
    it(`(${++counter}) Number comparison, 10 !== 14`, (done) => {
        assert.isFalse(Check.equals(10, 14))
        expect(Check.equals(10, 14)).to.be.a('boolean')
        done()
    })

    // Test case: 6
    it(`(${++counter}) Number and array comparison, 24 !== [24]`, (done) => {
        assert.isFalse(Check.equals(24, [24]))
        expect(Check.equals(24, [24])).to.be.a('boolean')
        done()
    })

    // Test case: 7
    it(`(${++counter}) Number and array comparison, 24 !== [\'24\']`, (done) => {
        assert.isFalse(Check.equals(24, ['24']))
        expect(Check.equals(10, ['24'])).to.be.a('boolean')
        done()
    })

    // Test case: 8
    it(`(${++counter}) Number and liter object comparison, 24 !== {value: 24}`, (done) => {
        assert.isFalse(Check.equals(24, { value: 24 }))
        expect(Check.equals(24, { value: 24 })).to.be.a('boolean')
        done()
    })

    // Test case: 9
    it(`(${++counter}) Number and literal object comparison, 24 !== {value: \'24\'}`, (done) => {
        assert.isFalse(Check.equals(24, { value: '24' }))
        expect(Check.equals(24, { value: '24' })).to.be.a('boolean')
        done()
    })

    // Test case: 10
    it(`(${++counter}) String comparison, \'abcdefg\' === \'abcdefg\'`, (done) => {
        assert.isTrue(Check.equals('abcdefg', 'abcdefg'))
        expect(Check.equals('abcdefg', 'abcdefg')).to.be.a('boolean')
        done()
    })

    // Test case: 11
    it(`(${++counter}) String comparison, \'abcdefg\' !== \'abcdefg\'`, (done) => {
        assert.isFalse(Check.equals('abcdefg', 'ABCDEFG'))
        expect(Check.equals('abcdefg', 'ABCDEFG')).to.be.a('boolean')
        done()
    })

    // Test case: 12
    it(`(${++counter}) String and boolean comparison, \'abc\' !== true`, (done) => {
        assert.isFalse(Check.equals('abc', true))
        expect(Check.equals('abc', true)).to.be.a('boolean')
        done()
    })

    // Test case: 13
    it(`(${++counter}) Number and boolean comparison, 25 !== false`, (done) => {
        assert.isFalse(Check.equals(25, false))
        expect(Check.equals(25, false)).to.be.a('boolean')
        done()
    })

    // Test case: 14
    it(`(${++counter}) Array comparison, [] !== []`, (done) => {
        assert.isFalse(Check.equals([], []))
        expect(Check.equals([], [])).to.be.a('boolean')
        done()
    })

    // Test case: 15
    it(`(${++counter}) Literal object comparison, {value: true} !== {value: true}`, (done) => {
        assert.isFalse(Check.equals({ value: true }, { value: true }))
        expect(Check.equals({ value: true }, { value: true })).to.be.a('boolean')
        done()
    })
})
