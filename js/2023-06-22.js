function getCharacters(obj, key, val) {
    let prop = key;
    var foundCharacters = [];
  
    for (let i = 0; i < obj.characters.length; i++) {
      if (obj.characters[i][prop] && obj.characters[i][prop].toLowerCase() === val.toLowerCase()) {
        foundCharacters.push(obj.characters[i]);
      }
    }
  
    return foundCharacters;
  }