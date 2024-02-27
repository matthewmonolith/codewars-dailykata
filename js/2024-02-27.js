function predictAge(...ages) {
  const arr = [...ages];
  return Math.floor(Math.sqrt(arr.reduce((acc, c) => {
    return acc + (c*c)
  }, 0)) / 2);
}