// 题目名称：字符串相加（大数加法）;
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。\

function add(strA, strB) {
  const lenA = strA.length;
  const lenB = strB.length;
  const maxLength = Math.max(lenA, lenB);
  if (!lenA.length) return strB;
  if (!lenB.length) return strA;
  const arrA = strA.split("").reverse();
  const arrB = strB.split("").reverse();
  let carry = 0;
  let result = "";

  for (let index = 0; index < maxLength; index++) {
    const digitA = Number(arrA[index]) || 0;
    const digitB = Number(arrB[index]) || 0;
    const sum = digitA + digitB + carry;
    result += sum % 10;
    if (sum >= 10) carry = 1;
    carry = 0;
  }
}

function getId(arr) {
  let ids = [];

  function travser(items) {
    if (items) ids.push(items.id);
    if (items.children) {
      items.children.forEach((child) => travser(child));
    }
  }

  arr.forEach((element) => {
    travser(element);
  });
}
