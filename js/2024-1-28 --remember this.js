function wordsToMarks(string) {
    return string.split('').reduce((total, char) => total + char.charCodeAt(0) - 96, 0);
  }