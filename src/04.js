function sort(arr1, arr2) {
  const maxLength = arr1.length + arr2.length - 1;
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  for (let index = maxLength; index >= 0; index--) {
    if (i >= 0 && j >= 0) {
      console.log(arr1[i], arr2[j]);
      if (arr1[i] > arr2[j]) {
        arr1[index] = arr1[i--];
      } else {
        arr1[index] = arr2[j--];
      }
    } else {
      arr1[index] = i >= j ? arr1[i--] : arr2[j--];
    }
  }
  console.log(arr1);

  return arr1;
}
// sort([1, 2, 3, 4, 5], [1, 3, 5, 7, 8]);

function merage(A, B) {
  let maxLength = A.length + B.length - 1;
  const result = [];
  let i = A.length - 1;
  let j = B.length - 1;
  for (let index = maxLength; index >= 0; index--) {
    const numberA = A[i];
    const numberB = B[j];
    if (numberA > numberB) {
      result[index] = numberA;
      i = i-- > 0 ? i-- : 0;
    } else {
      result[index] = numberB;
      j = j-- > 0 ? j-- : 0;
    }
  }

  console.log("result", result);
}

merage([1, 2, 3, 4, 5], [1, 3, 5, 7, 8]);
