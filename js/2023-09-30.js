function stockList(listOfArt, listOfCat) {
    const count = {};
    if(listOfArt.length === 0 || listOfCat.length === 0){
      return ''
    }
    
     listOfCat.forEach(cat => {
      count[cat] = 0;
    });
    
    for (let i = 0; i < listOfArt.length; i++) {
      let currLetter = listOfArt[i].split(' ')[0][0];
      let currAmount = Number(listOfArt[i].split(' ')[1]);
      count[currLetter] = count[currLetter] ? count[currLetter] + currAmount : currAmount;
    }
   const result = [];
    for (let i = 0; i < listOfCat.length; i++) {
      const category = listOfCat[i];
      const quantity = count[category];
      result.push(`(${category} : ${quantity})`);
    }
    return result.join(' - ')
  }