/* eslint-env mocha */

// set up, run once before every 'describe' block
before((done) => {
    global.INT_VAL1 = -10
    global.INT_VAL2 = 10
    global.INT_VAL3 = 100
    global.INT_VAL4 = 500
    global.INT_VAL5 = 1000
    global.STR_VAL1 = ''
    global.STR_VAL2 = 'hello'
    global.STR_VAL3 = 'HELLO'
    global.STR_VAL4 = 'world'
    global.STR_VAL5 = 'WORLD'
    global.STR_BOOL1 = 'true'
    global.STR_BOOL2 = 'false'
    global.STR_INT1 = '10'
    global.STR_INT2 = '1000'
    global.TEST_ARRAY1 = []
    global.TEST_ARRAY2 = [-10, 50, 100]
    global.TEST_ARRAY3 = ['', 'hello', 'HeLLO', 'world']
    global.TEST_ARRAY4 = [{}, { 'prop1': 'true', 'prop2': 123 }, { 'prop1': 100, 'prop2': [-10, 50, 100], 'prop3': 'WORLD' }]
    global.TEST_ARRAY5 = [20, 'world', true, { 'prop1': 'true', 'prop2': 123 }, Symbol(), 'true']
    global.TEST_ARRAY6 = [1000]
    global.TEST_ARRAY7 = ['1000']
    global.TEST_ARRAY8 = [true]
    global.TEST_ARRAY9 = []
    global.TEST_OBJ1 = {}
    global.TEST_OBJ2 = { 'prop1': 100 }
    global.TEST_OBJ3 = { 'prop1': 100, 'prop2': [-10, 50, 100], 'prop3': 'WORLD' }
    global.TEST_OBJ4 = { 'prop1': 500, 'prop2': [-10, 50, 100], 'prop3': 'hello', 'prop4': false, 'prop5': Symbol('test') }
    global.TEST_OBJ5 = { 'prop1': 'hello' }
    global.TEST_OBJ6 = { 'prop1': true }
    global.TEST_OBJ7 = { 'prop1': true }
    global.TEST_OBJ8 = { 'prop1': '100' }
    global.TEST_SYM1 = Symbol()
    global.TEST_SYM2 = Symbol('hello')
    global.TEST_SYM3 = Symbol('test')
    global.TEST_SYM4 = Symbol(100)
    global.TEST_SYM5 = Symbol('hello')
    global.TEST_DATE1 = new Date()
    global.TEST_DATE2 = new Date(2018, 0, 1)
    global.TEST_DATE3 = new Date(2018, 0, 1)
    global.TEST_DATE4 = new Date(1990, 6, 25)
    global.TEST_DATE5 = new Date(210, 10, 10)
    global.TEST_FUNCT1 = () => { return true }
    global.TEST_FUNCT2 = () => { return true }
    global.TEST_FUNCT3 = () => { return false }
    global.TEST_FUNCT4 = function () { return false }
    done()
})

// teardown, run once after every 'describe' block
after((done) => {
    global.INT_VAL1 = undefined
    global.INT_VAL2 = undefined
    global.INT_VAL3 = undefined
    global.INT_VAL4 = undefined
    global.INT_VAL5 = undefined
    global.STR_VAL1 = undefined
    global.STR_VAL2 = undefined
    global.STR_VAL3 = undefined
    global.STR_VAL4 = undefined
    global.STR_VAL5 = undefined
    global.STR_BOOL1 = undefined
    global.STR_BOOL2 = undefined
    global.STR_INT1 = undefined
    global.STR_INT2 = undefined
    global.TEST_ARRAY1 = undefined
    global.TEST_ARRAY2 = undefined
    global.TEST_ARRAY3 = undefined
    global.TEST_ARRAY4 = undefined
    global.TEST_ARRAY5 = undefined
    global.TEST_ARRAY6 = undefined
    global.TEST_ARRAY7 = undefined
    global.TEST_ARRAY8 = undefined
    global.TEST_ARRAY9 = undefined
    global.TEST_OBJ1 = undefined
    global.TEST_OBJ2 = undefined
    global.TEST_OBJ3 = undefined
    global.TEST_OBJ4 = undefined
    global.TEST_OBJ5 = undefined
    global.TEST_OBJ6 = undefined
    global.TEST_OBJ7 = undefined
    global.TEST_OBJ8 = undefined
    global.TEST_SYM1 = undefined
    global.TEST_SYM1 = undefined
    global.TEST_SYM2 = undefined
    global.TEST_SYM3 = undefined
    global.TEST_SYM4 = undefined
    global.TEST_SYM5 = undefined
    global.TEST_DATE1 = undefined
    global.TEST_DATE2 = undefined
    global.TEST_DATE3 = undefined
    global.TEST_DATE4 = undefined
    global.TEST_DATE5 = undefined
    global.TEST_FUNCT1 = undefined
    global.TEST_FUNCT2 = undefined
    global.TEST_FUNCT3 = undefined
    global.TEST_FUNCT4 = undefined
    done()
})