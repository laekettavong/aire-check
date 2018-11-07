import { assert, expect } from 'chai'
import Check from '..'

describe(`Check.isGreaterThanOrEqualTo`, () => {
    let counter = 0
    // Test case: 1
    it(`(${++counter}) Number comparison, 10 > 5`, (done) => {
        assert.isTrue(Check.isGreaterThanOrEqualTo(10, 5))
        expect(Check.isGreaterThanOrEqualTo(10, 5)).to.be.a('boolean')
        done()
    })

    // Test case: 2
    it(`(${++counter}) Number comparison, 100 > 100`, (done) => {
        assert.isTrue(Check.isGreaterThanOrEqualTo(100, 100))
        expect(Check.isGreaterThanOrEqualTo(100, 100)).to.be.a('boolean')
        done()
    })


    // Test case: 10
    xit(`(${++counter}) Number and boolean comparison, true > 100`, (done) => {
        assert.throws(() => {
            assert.isTrue(Check.isGreaterThan(true, 100))
        }, TypeError)
        done()
    })
})