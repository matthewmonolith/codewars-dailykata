function mostLikely(p1,p2){
    p1 = p1.split(':');
    p2 = p2.split(':');
  
    p1 = p1[0]/p1[1];
    p2 = p2[0]/p2[1];
    
    return (p1 > p2);
  }