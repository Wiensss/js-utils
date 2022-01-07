const STRING = require('../utils/string')

const ORIGIN_STRING = 'appkey=v_url=https%3A%2F%2Fcystalballn'

// matchString
test('match index of -1, returnType is boolean', () => {
  expect(STRING.matchString(ORIGIN_STRING, 'aa pp')).toBe(false)
})
test('match index of -1, returnType is index', () => {
  expect(STRING.matchString(ORIGIN_STRING, 'aa pp', 'index')).toBe(-1)
})
test('match index of -1, returnType is object', () => {
  expect(STRING.matchString(ORIGIN_STRING, 'aa pp', 'object')).toStrictEqual({ index: -1, boolean: false })
})
test('match index of 0, returnType is boolean', () => {
  expect(STRING.matchString(ORIGIN_STRING, 'app')).toBe(true)
})
test('match string contain space of start, returnType is boolean', () => {
  expect(STRING.matchString(ORIGIN_STRING, ' key')).toBe(true)
})
test('match index of 0, returnType is index', () => {
  expect(STRING.matchString(ORIGIN_STRING, 'app', 'index')).toBe(0)
})
test('match string contain space of start, returnType is index', () => {
  expect(STRING.matchString(ORIGIN_STRING, ' key', 'index')).toBe(4)
})
test('match index of 0, returnType is object', () => {
  expect(STRING.matchString(ORIGIN_STRING, 'app', 'object')).toStrictEqual({ index: 0, boolean: true })
})
test('match string contain space of start, returnType is object', () => {
  expect(STRING.matchString(ORIGIN_STRING, ' key', 'object')).toStrictEqual({ index: 4, boolean: true })
})