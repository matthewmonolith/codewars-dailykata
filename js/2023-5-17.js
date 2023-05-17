//6kyu mexican wave 
function wave(str){
    let waveArr = [];
    for(let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (letter === " ") {
        continue;
      } else {
        waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
      } 
    }
    return waveArr;
  }

//   Within the loop, it assigns the current character to the variable letter for easier access.
// If the current character is a space, the continue statement is executed, which skips the rest of the code for the current iteration and moves to the next iteration.
// If the current character is not a space, it creates a new wave by capitalizing the current character. It uses the toUpperCase() method to convert the character to uppercase and concatenates it with the slices of the string before and after the current character.
// The newly formed wave is then pushed into the waveArr array using the push() method.
// After the loop finishes, the function returns the waveArr array containing all the generated waves.