function conjugate(verb){
    let res = verb
    verb = {
      [verb]:[]  
    }
    
    const ar = ['o','as','a','amos','áis','an']
    const er = ['o','es','e','emos','éis','en']
    const ir = ['o','es','e','imos','ís','en']
    
    if(res.includes('ar')){
      for(let i = 0; i < ar.length; i++){
        verb[res].push(res.slice(0, -2) + ar[i])
      }
    }else if(res.includes('er')){
      for(let i = 0; i < er.length; i++){
        verb[res].push(res.slice(0, -2) + er[i])
      }
    }else if(res.includes('ir')){
      for(let i = 0; i < ir.length; i++){
        verb[res].push(res.slice(0, -2) + ir[i])
      }
    }
  return verb
  }