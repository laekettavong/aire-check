import { assert, expect } from 'chai'
import Check from '..'

describe(`Check.xxx`, () => {
    let counter = 0
    // Test case: 1
    it(`(${++counter}) Number comparison, 10 === 10`, (done) => {
        assert.isTrue(Check.equalsIgnoreCase('10', '10'))
        expect(Check.equalsIgnoreCase('10', '10')).to.be.a('boolean')
        done()
    })

})