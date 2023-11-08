function alphabetWar(fight)
{
   const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    score: 0
  };
  
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
    score: 0
  }
  
  for(let i = 0; i < fight.length; i++){
    if(left[fight[i]]){
      left.score+=left[fight[i]]
    }else if(right[fight[i]]){
      right.score+=right[fight[i]]
    }
  }
  
  if(right.score > left.score){
    return 'Right side wins!'
  }else if (right.score < left.score){
    return 'Left side wins!'
  }else { 
   return "Let's fight again!";
  }

}