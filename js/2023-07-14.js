function killer(suspectInfo, dead) {
    //your code here...
    for (let name in suspectInfo) {
      if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
        return name;
      }
    }
  }