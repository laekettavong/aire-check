import { assert, expect } from 'chai'
import Check from '..'

describe(`Check.isGreaterThan`, () => {
    let counter = 0
    // Test case: 1
    it(`(${++counter}) Number comparison, 10 > 5`, (done) => {
        assert.isTrue(Check.isGreaterThan(10, 5))
        expect(Check.isGreaterThan(10, 5)).to.be.a('boolean')
        done()
    })

    // Test case: 2
    it(`(${++counter}) Number comparison, 1000 > 1000`, (done) => {
        assert.isFalse(Check.isGreaterThan(1000, 1000))
        expect(Check.isGreaterThan(1000, 1000)).to.be.a('boolean')
        done()
    })

    // Test case: 3
    it(`(${++counter}) Number comparison, 100 > 200`, (done) => {
        assert.isFalse(Check.isGreaterThan(100, 200))
        expect(Check.isGreaterThan(100, 200)).to.be.a('boolean')
        done()
    })

    // Test case: 4
    it(`(${++counter}) Number comparison, 100 > -200`, (done) => {
        assert.isTrue(Check.isGreaterThan(100, -200))
        expect(Check.isGreaterThan(100, 200)).to.be.a('boolean')
        done()
    })

    // Test case: 5
    it(`(${++counter}) Number and string comparison, 100 > '80'`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.isGreaterThan(100, '80'))
        }, TypeError)
        done()
    })

    // Test case: 6
    it(`(${++counter}) Number and string comparison, '100' > 80`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.isGreaterThan('100', 80))
        }, TypeError)
        done()
    })

    // Test case: 7
    it(`(${++counter}) String comparison, '100' > '80'`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.isGreaterThan('100', '80'))
        }, TypeError)
        done()
    })

    // Test case: 8
    it(`(${++counter}) Number and array comparison, 100 > [90]`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.isGreaterThan(100, [90]))
        }, TypeError)
        done()
    })

    // Test case: 9
    it(`(${++counter}) Number and array comparison, {value:200} > 100`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.isGreaterThan({ value: 200 }, 100))
        }, TypeError)
        done()
    })

    // Test case: 10
    it(`(${++counter}) Number and boolean comparison, true > 100`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.isGreaterThan(true, 100))
        }, TypeError)
        done()
    })
})