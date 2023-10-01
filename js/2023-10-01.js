function factorial(n)
{
  if(n < 0 || n > 12){
    throw new RangeError()
  }
  let sum = 1
  for(let i = 1; i <=n ; i++){
    sum*=i
  }
  return sum
}