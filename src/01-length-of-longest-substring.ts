// 题目名称：无重复字符的最长子串（类似题目：最长无重复子数组）

function lengthOfLongestSubstring(s) {
  if (s.length <= 1) return s.length

  let maxLen = 0
  const strArr = s.split('')

  const resultstr = strArr.reduce((total, value) => {
    const index = total.indexOf(value)

    // 拼接到 total 尾部
    total += value

    if (index === -1) {
      // 如果该字符没有在 total 中出现过，获取目前为止滑动窗口的最大值
      maxLen = Math.max(total.length, maxLen)
    } else {
      // 如果该字符有在 total 中出现过，则剔除掉 total 中 0 ~ index 的字符
      total = total.slice(index + 1)
    }
    console.log(total)

    return total
  }, '')
  console.log(resultstr)

  return maxLen
};