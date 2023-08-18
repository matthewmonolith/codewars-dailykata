// Return an array
function fizzbuzz(n)
{
  const res = []
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      res.push("FizzBuzz")
    }else if (i % 5 === 0){
      res.push("Buzz")
    }else if (i % 3 === 0){
      res.push("Fizz")
    }else {
      res.push(i)
    }
  }
  return res
}
