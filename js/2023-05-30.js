function DNAStrand(dna){
    let pairOne = dna.split('')
    let pairTwo = []
    pairOne.forEach(element => {
      if(element === 'A'){
        pairTwo.push('T')
      }else if(element === 'T'){
        pairTwo.push('A')
      }else if(element === 'C'){
        pairTwo.push('G')
      }else{
        pairTwo.push('C')
      }
    })
    return pairTwo.join('')
  }