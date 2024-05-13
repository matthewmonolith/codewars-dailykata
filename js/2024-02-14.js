function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      continue;
    }
    score += array1[i] === array2[i] ? 4 : -1;
  }
  return Math.max(score, 0);
}