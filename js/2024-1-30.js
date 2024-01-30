function isSortedAndHow(array) {
    const sortedAsc = [...array].sort((a, b) => a - b);
    const sortedDesc = [...array].sort((a, b) => b - a);
  
    if (array.every((value, index) => value === sortedAsc[index])) {
      return 'asc';
    } else if (array.every((value, index) => value === sortedDesc[index])) {
      return 'desc';
    } else {
      return 'no';
    }
  }
  