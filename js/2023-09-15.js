function toWeirdCase(string) {
    const words = string.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      let curr = words[i].toLowerCase().split('');
  
      for (let j = 0; j < curr.length; j++) {
        if (j % 2 === 0) {
          curr[j] = curr[j].toUpperCase();
        } else {
          curr[j] = curr[j].toLowerCase();
        }
      }
  
      words[i] = curr.join('');
    }
  
    return words.join(' ');
  }
  