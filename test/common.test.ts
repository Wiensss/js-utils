const COMMON = require('../utils/common')

// cloneJSON
test('clone undefined to undefined', () => {
  expect(COMMON.cloneJSON(undefined)).toBe(undefined)
})

test('clone null to null', () => {
  expect(COMMON.cloneJSON(null)).toBe(null)
})

test('clone number to number', () => {
  expect(COMMON.cloneJSON(1)).toBe(1)
})

test('clone string to string', () => {
  expect(COMMON.cloneJSON('')).toBe('')
})

test('clone array to array', () => {
  expect(COMMON.cloneJSON(['foo', 'bar'])).toStrictEqual(['foo', 'bar'])
})

test('clone object to object', () => {
  expect(COMMON.cloneJSON({ foo: 'bar' })).toStrictEqual({ foo: 'bar' })
})

test('clone undefined to undefined', () => {
  expect(COMMON.cloneJSON(undefined)).toBe(undefined)
})

// isEqualJSON

test('null is equal null', () => {
  expect(COMMON.isEqualJSON(null, null)).toBe(true)
})

test('null is not equal other', () => {
  expect(COMMON.isEqualJSON(null, undefined)).toBe(false)
})

test('numbrt is equal number', () => {
  expect(COMMON.isEqualJSON(1, 1)).toBe(true)
})

test('numbrt is not equal other', () => {
  expect(COMMON.isEqualJSON(1, 2)).toBe(false)
})

test('string is equal string', () => {
  expect(COMMON.isEqualJSON('foo', 'foo')).toBe(true)
})

test('string is not equal other', () => {
  expect(COMMON.isEqualJSON('foo', 'bar')).toBe(false)
})

test('array is equal array', () => {
  expect(COMMON.isEqualJSON(['foo', 'bar'], ['foo', 'bar'])).toBe(true)
})

test('array is not equal other', () => {
  expect(COMMON.isEqualJSON(['foo', 'bar'], [])).toBe(false)
})

test('object is equal object', () => {
  expect(COMMON.isEqualJSON({ foo: 'bar' }, { foo: 'bar' })).toBe(true)
})

test('object is not equal other', () => {
  expect(COMMON.isEqualJSON({ foo: 'bar' }, {})).toBe(false)
})