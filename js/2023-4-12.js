// 7kyu return shortest word in string

function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length).map(element => element.length)[0];
    }