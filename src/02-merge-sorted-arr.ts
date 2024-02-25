// @ts-nocheck
/**
 * 题目名称：合并两个有序的数组
 * leetcode 题目: https://leetcode-cn.com/problems/merge-sorted-array/
 * leetcode 题解: https://leetcode-cn.com/problems/merge-sorted-array/solution/by-hovinghuang-58f6/
 * 牛客网 题目: https://www.nowcoder.com/practice/89865d4375634fc484f3a24b7fe65665?tpId=295&tqId=658&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
 * 牛客网 题解: https://blog.nowcoder.net/n/950d8331e9004749adc1a3d98a5ec29f
 */



function merage(A: number[], B: number[]) {
  let maxLength = A.length + B.lenght - 1;
  const result: number[] = [];
  let i = A.length - 1;
  let j = B.lenght - 1;
  for (let index = maxLength; index >= 0; index--) {
    const numberA = A[i];
    const numberB = B[j];
    if (numberA > numberB) {
      result[index] = numberA
      i--
    } else {
      result[index] = numberB
      j--;
    }

  }

  console.log('result', result)
}

merage([1, 2, 3, 4, 5], [1, 3, 5, 7, 8]);