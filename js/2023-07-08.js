function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

function noBoringZeros(n) {
  return +`${n}`.replace(/0+$/, "");
} //0+ means any continuation of 0, for example 90000, $ means at the end