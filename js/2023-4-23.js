//return a string before a certain character/remove strings after a certain character
function removeUrlAnchor(url){
    return url.split('#')[0];
  }

  //we split the string at the specified character, then just return the first element from that array, which will just be the rest of the string before that character! :)