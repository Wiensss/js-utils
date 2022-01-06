/**
 * 创建一个 value 的 JSON 拷贝
 * @param {*} value 要拷贝的织 
 * @returns 返回拷贝后的值
 */
function cloneJSON<T>(value: T): T {
  return typeof value === 'undefined' ? undefined : JSON.parse(JSON.stringify(value))
}

/**
 * 执行 JSON 序列化来确定两者的值是否相等
 * @param value 用来比较的值
 * @param other 另一个用来比较的值
 * @returns 如果两个值完全相同，那么返回 true，否则返回 false 
 */
function isEqualJSON(value: any, other: any): boolean {
  return JSON.stringify(value) === JSON.stringify(other)
}

module.exports = {
  cloneJSON,
  isEqualJSON
}
