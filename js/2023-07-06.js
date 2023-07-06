const isConsecutive = str => {
    const seen = new Set(); //([])
    let latest;
    //str = 112233
    for (const char of str)
      if (!seen.has(char))
        seen.add(latest = char); //([1]) ([1,2]) ([1,2,3])
      else if (latest !== char)
        return false;
    
    return true;
  }



//   The Set object lets you store unique values of any type, whether primitive values or object references.

// Description
// Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection.

const isConsecutive = str => {
    const seen = new Set(); //([])
    let latest;
    //str = 11223311
    for (const char of str)
      if (!seen.has(char))
        seen.add(latest = char); //([1]) ([1,2]) ([1,2,3])
      else if (latest !== char) //11 left, latest is 3 not 1, therefore returns false
        return false;
    
    return true;
  }
