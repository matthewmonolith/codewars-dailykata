function titleCase(title, minorWords) {
    if(!minorWords){
      return title.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(' ')
  }
  const arr = title.split(' ').map(el => el.toLowerCase())
  const minorWordsArr = minorWords.split(' ').map(el => el.toLowerCase())
  return arr.map((el,i,a) => {
      if(i === 0){
          return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
      }else if (minorWordsArr.includes(el)){
          return el
      }else {
          return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
      }
  }).join(' ')
}
