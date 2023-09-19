function archersReady(archers){
    // arrow it
    return archers.length === 0 ? false : archers.every(a => a >= 5 );
  }