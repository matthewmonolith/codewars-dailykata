function position(letter){
    const alphabetArray = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
    return `Position of alphabet: ${alphabetArray.indexOf(letter)+1}`
  }