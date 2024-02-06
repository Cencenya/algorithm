function merage(A, B) {
  let maxLength = A.length + B.length - 1;
  const result = [];
  let i = A.length - 1;
  let j = B.length - 1;
  for (let index = maxLength; index >= 0; index--) {
    if (i >= 0 && j >= 0) {
      if (A[i] > B[j]) {
        result[index] = A[i--];
      } else {
        result[index] = B[j--];
      }
    } else {
      result[index] = i >= j ? A[i--] : B[j--];
    }
  }

  console.log("result", result);
}
merage([1, 2, 3], [1, 5, 6]);

function merageSecond(A, B) {
  const lenA = A.length;
  const lenB = B.length;
  const maxLength = lenA + lenB;
  if (!lenB) return A;
  if (!lenB) return B;
  for (let index = lenA; index < maxLength; index++) {
    A[index] = B.shift();
  }
  A.sort((a, b) => a - b);
  console.log(A);
}

merageSecond([1, 2, 3], [1, 5, 6]);
