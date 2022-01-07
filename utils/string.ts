const _ = require('lodash')

/**
 * 生成指定长度的随机字符串
 * @param type 随机字符串的字符集，默认为 'mixed'
 *  - 'number': 只包含数字0-9
 *  - 'lower': 只包含小写字母
 *  - 'alpha': 只包含字母
 *  - 'mixed': 包含数字0-9，小写字母，大写字母
 * @param len 生成的字符串长度，默认为 8
 * @returns 返回生成的随机字符串
 */
function randomString(
  type: 'number' | 'lower' | 'upper' | 'alpha' | 'mixed' = 'mixed',
  len: number = 8
): string {
  const numberSet = '0123456789'
  const lowerSet = 'abcdefghijklmnopqrstuvwxyz'
  const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let charset: string

  switch(type) {
    case 'number':
      charset = numberSet
      break
    case 'lower':
      charset = lowerSet
      break
    case 'upper':
      charset = upperSet
      break
    case 'alpha':
      charset = `${lowerSet}${upperSet}`
      break
    case 'mixed':
      charset = `${numberSet}${lowerSet}${upperSet}`
      break
    default:
      break
  }

  return _.sampleSize(charset, len).join('')
}

/**
 * 、在源字符串中匹配目标字符串
 * @param origin 用来被匹配的源字符串
 * @param target 进行匹配的目标字符串
 * @param returnType 返回格式，默认为 'boolean'
 * - 'boolean': 返回匹配结果 true / false
 * - 'index': 返回匹配的起始位置, 匹配失败为 -1
 * - 'object': 返回 { boolean, index }
 * @returns 根据 returnType 返回匹配结果
 */
function matchString(
  origin: string,
  target: string,
  returnType: 'boolean' | 'index' | 'object' = 'boolean'
): any {
  const execResult = (result: { index: number, boolean: boolean }) => (
    returnType !== 'object' ? result[returnType] : result
  )

  if (target === '') execResult({ index: 0, boolean: true })

  const orginString = origin.trim().toLocaleLowerCase()
  const targetString = target.trim().toLocaleLowerCase()

  return execResult({
    index: orginString.search(targetString),
    boolean: orginString.includes(targetString)
  })
}

module.exports = {
  randomString,
  matchString
}