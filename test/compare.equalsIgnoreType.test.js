import { assert, expect } from 'chai'
import Check from '..'

describe(`Check.equalsIgnoreType`, () => {
    let counter = 0
    // Test case: 1
    it(`(${++counter}) Number comparison, 10 == 10`, (done) => {
        assert.isTrue(Check.equalsIgnoreType(10, 10))
        expect(Check.equalsIgnoreType(10, 10)).to.be.a('boolean')
        done()
    })

    // Test case: 2
    it(`(${++counter}) Number and string comparison, 10 == \'10\'`, (done) => {
        assert.isTrue(Check.equalsIgnoreType(10, '10'))
        expect(Check.equalsIgnoreType(10, '10')).to.be.a('boolean')
        done()
    })

    // Test case: 3
    it(`(${++counter}) Number and string comparison, \'10\' == 10`, (done) => {
        assert.isTrue(Check.equalsIgnoreType('10', 10))
        expect(Check.equalsIgnoreType('10', 10)).to.be.a('boolean')
        done()
    })

    // Test case: 4
    it(`(${++counter}) String comparison, \'10\' == \'10\'`, (done) => {
        assert.isTrue(Check.equalsIgnoreType('10', '10'))
        expect(Check.equalsIgnoreType('10', '10')).to.be.a('boolean')
        done()
    })

    // Test case: 5
    it(`(${++counter}) Number comparison, 10 != 14`, (done) => {
        assert.isFalse(Check.equalsIgnoreType(10, 14))
        expect(Check.equalsIgnoreType(10, 14)).to.be.a('boolean')
        done()
    })

    // Test case: 6
    it(`(${++counter}) Number and array comparison, 24 == [24]`, (done) => {
        assert.isTrue(Check.equalsIgnoreType(24, [24]))
        expect(Check.equalsIgnoreType(24, [24])).to.be.a('boolean')
        done()
    })

    // Test case: 7
    it(`(${++counter}) Number and array comparison, 24 == [\'24\']`, (done) => {
        assert.isTrue(Check.equalsIgnoreType(24, ['24']))
        expect(Check.equalsIgnoreType(24, ['24'])).to.be.a('boolean')
        done()
    })

    // Test case: 8
    it(`(${++counter}) Number and literal object comparison, 24 != {value: 24}`, (done) => {
        assert.isFalse(Check.equalsIgnoreType(24, { value: 24 }))
        expect(Check.equalsIgnoreType(24, { value: 24 })).to.be.a('boolean')
        done()
    })

    // Test case: 9
    it(`(${++counter}) Numberand literal object comparison, 24 != {value: \'24\'}`, (done) => {
        assert.isFalse(Check.equalsIgnoreType(24, { value: '24' }))
        expect(Check.equalsIgnoreType(24, { value: '24' })).to.be.a('boolean')
        done()
    })

    // Test case: 10
    it(`(${++counter}) String comparison, \'abcdefg\' == \'abcdefg\'`, (done) => {
        assert.isTrue(Check.equalsIgnoreType('abcdefg', 'abcdefg'))
        expect(Check.equalsIgnoreType('abcdefg', 'abcdefg')).to.be.a('boolean')
        done()
    })

    // Test case: 11
    it(`(${++counter}) String comparison, \'abcdefg\' != \'abcdefg\'`, (done) => {
        assert.isFalse(Check.equalsIgnoreType('abcdefg', 'ABCDEFG'))
        expect(Check.equalsIgnoreType('abcdefg', 'ABCDEFG')).to.be.a('boolean')
        done()
    })

    // Test case: 12
    it(`(${++counter}) String and boolean comparison, \'abc\' != true`, (done) => {
        assert.isFalse(Check.equalsIgnoreType('abc', true))
        expect(Check.equalsIgnoreType('abcdefg', 'abcdefg')).to.be.a('boolean')
        done()
    })

    // Test case: 13
    it(`(${++counter}) Number and boolean comparison, 25 != false`, (done) => {
        assert.isFalse(Check.equalsIgnoreType(25, false))
        expect(Check.equalsIgnoreType(25, false)).to.be.a('boolean')
        done()
    })

    // Test case: 14
    it(`(${++counter}) Array comparison, [] != []`, (done) => {
        assert.isFalse(Check.equalsIgnoreType([], []))
        expect(Check.equalsIgnoreType([], [])).to.be.a('boolean')
        done()
    })

    // Test case: 15
    it(`(${++counter}) Literal object comparison, {value: true} != {value: true}`, (done) => {
        assert.isFalse(Check.equalsIgnoreType({ value: true }, { value: true }))
        expect(Check.equalsIgnoreType({ value: true }, { value: true })).to.be.a('boolean')
        done()
    })

    // Test case: 15
    it(`(${++counter}) Literal object and array comparison, {value: true} != [true]`, (done) => {
        assert.isFalse(Check.equalsIgnoreType({ value: true }, [true]))
        expect(Check.equalsIgnoreType({ value: true }, [true])).to.be.a('boolean')
        done()
    })
})

