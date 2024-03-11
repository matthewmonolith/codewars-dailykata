function contamination(text, char){
    return text.split('').map(letter => letter = char).join('')
  }